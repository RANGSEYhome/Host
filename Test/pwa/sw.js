const CACHE_NAME = 'blog-v1';
const OFFLINE_URL = 'offline.html';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(['/', OFFLINE_URL]))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request))
            .catch(() => caches.match(OFFLINE_URL))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
