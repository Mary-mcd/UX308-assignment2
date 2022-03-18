var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/?',
  '/index.html',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content always */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

serviceWorkerContainer.register(scriptURL, options)
  .then(function(serviceWorkerRegistration) { /* ... */ });
  