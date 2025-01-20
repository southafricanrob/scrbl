const CACHE_NAME = 'scrbl-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pwa/manifest.json',
  '/pwa/icon-192x192.png',
  '/pwa/icon-512x512.png',
  '/pwa/favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((error) => console.error('Failed to cache assets:', error))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => console.error('Fetch failed:', error))
  );
});
