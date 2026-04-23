// sw.js - Service Worker for RANGSEYhome PWA
// Version: 2.8.1

const CACHE_NAME = 'rangseyhome-v2.8.1';
const BLOG_URL = 'https://your-blog.blogspot.com'; // CHANGE THIS to your actual Blogger URL

// Files to cache for offline access
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/p/search.html',
  '/p/about.html',
  '/p/terms.html',
  '/p/privacy.html',
  '/p/contact.html'
];

// Assets from CDN to cache
const CDN_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install event - cache core files
self.addEventListener('install', (event) => {
  console.log('[SW] Installing RANGSEYhome PWA...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        // Cache static pages
        for (const url of STATIC_CACHE_URLS) {
          try {
            const response = await fetch(BLOG_URL + url);
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch(e) {
            console.log('Failed to cache:', url);
          }
        }
        
        // Cache CDN assets
        for (const url of CDN_ASSETS) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch(e) {
            console.log('Failed to cache CDN asset:', url);
          }
        }
        
        // Cache the offline page
        const offlineResponse = new Response(OFFLINE_HTML, {
          headers: { 'Content-Type': 'text/html' }
        });
        await cache.put('/offline.html', offlineResponse);
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
          if (cacheName !== CACHE_NAME) {
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
  
  // Skip cross-origin requests except CDN
  if (!url.includes(BLOG_URL) && 
      !url.includes('blogger.com') && 
      !url.includes('cdnjs.cloudflare.com') &&
      !url.includes('fonts.googleapis.com') &&
      !url.includes('blogger.googleusercontent.com')) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
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
            
            // Cache the fetched response
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return networkResponse;
          })
          .catch(() => {
            // If offline and request is for a page, show offline page
            if (event.request.headers.get('accept') && 
                event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            
            // For images, return a placeholder
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
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans Khmer', sans-serif;
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
    }
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

// Handle push notifications (optional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOvvrbwyO4ChctEyMSnS40CZB8r1MMEc8pNYFlpZp7A3kVyyKcimzGs5XlKyeXw8d-wfFiP6BxSjaKQSZdtl48Pt4wtL6b6Z7GwGrbQycIB8bPMJtptoP4-Ta0PpqmmZSjdiyD_WJ5Tm1A6DlvPHQwg7xO6GkuBUGyWU5vh6MWllu7ILhlsF20rvVhG_6U/s192/Phalabriksa%20-%20Circle%20Green.png',
      badge: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOvvrbwyO4ChctEyMSnS40CZB8r1MMEc8pNYFlpZp7A3kVyyKcimzGs5XlKyeXw8d-wfFiP6BxSjaKQSZdtl48Pt4wtL6b6Z7GwGrbQycIB8bPMJtptoP4-Ta0PpqmmZSjdiyD_WJ5Tm1A6DlvPHQwg7xO6GkuBUGyWU5vh6MWllu7ILhlsF20rvVhG_6U/s72/Phalabriksa%20-%20Circle%20Green.png',
      vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification('RANGSEYhome', options));
  }
});
