const CACHE_NAME = 'rangseyhome-v2.8.1';
const SITE_URL = self.location.origin;

// Files to cache for offline access
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/p/search.html',
  '/p/about.html',
  '/p/terms.html',
  '/p/privacy.html',
  '/p/contact.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('[SW] Installing RANGSEYhome PWA...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        // Try to cache each URL, don't fail if one fails
        for (const url of PRECACHE_URLS) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              await cache.put(url, response);
              console.log('[SW] Cached:', url);
            }
          } catch(e) {
            console.log('[SW] Failed to cache:', url);
          }
        }
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('rangseyhome')) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Only handle requests from same origin or known CDNs
  const isSameOrigin = url.startsWith(SITE_URL);
  const isAllowedCDN = url.includes('cdnjs.cloudflare.com') || 
                        url.includes('fonts.googleapis.com') ||
                        url.includes('blogger.googleusercontent.com');
  
  if (!isSameOrigin && !isAllowedCDN) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache if not a valid response
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            // Cache the fetched response for future offline use
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return networkResponse;
          })
          .catch(() => {
            // If offline and request is for an HTML page, show offline page
            if (event.request.headers.get('accept') && 
                event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html').then(cached => {
                if (cached) return cached;
                return new Response(OFFLINE_HTML, {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: new Headers({
                    'Content-Type': 'text/html'
                  })
                });
              });
            }
            
            // For images, return a transparent placeholder
            if (event.request.headers.get('accept') && 
                event.request.headers.get('accept').includes('image')) {
              return new Response('', { status: 204 });
            }
            
            // Default offline response
            return new Response('You are offline. Please check your connection.', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Handle messages from the main page
self.addEventListener('message', (event) => {
  if (event.data.type === 'ONLINE_STATUS') {
    if (event.data.online) {
      console.log('[SW] Back online - refreshing cache');
      // Optionally trigger a cache refresh here
    }
  }
});

// Optional: Background sync for forms
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-bookmarks') {
    console.log('[SW] Syncing bookmarks...');
    event.waitUntil(syncBookmarks());
  }
});

async function syncBookmarks() {
  // Implement bookmark sync logic if needed
  console.log('[SW] Bookmark sync completed');
}

// Offline HTML page
const OFFLINE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Offline - RANGSEYhome</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, 'Noto Sans Khmer', sans-serif;
      background: #efefef;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      text-align: center;
      max-width: 400px;
      background: white;
      border-radius: 24px;
      padding: 40px 24px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    .icon { font-size: 64px; margin-bottom: 20px; }
    h1 { font-size: 24px; color: #2d3748; margin-bottom: 12px; }
    p { color: #4a5568; line-height: 1.6; margin-bottom: 24px; }
    button {
      background: #55c489;
      color: white;
      border: none;
      padding: 12px 32px;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:active { transform: scale(0.96); }
    @media (prefers-color-scheme: dark) {
      body { background: #1a202c; }
      .container { background: #2d3748; }
      h1 { color: #f7fafc; }
      p { color: #cbd5e0; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">📡</div>
    <h1>You're Offline</h1>
    <p>Please check your internet connection and try again.</p>
    <button onclick="location.reload()">Retry</button>
  </div>
</body>
</html>`;
