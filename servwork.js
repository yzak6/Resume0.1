//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_Mipagina';
const urlsToCache = [
    '/yzak6.github.io/Resume0.1/script.js',
    '/yzak6.github.io/Resume0.1/style.css',
    '/yzak6.github.io/Resume0.1/index.html'
  ];

self.addEventListener('install', event => {
    event.waitUntil(
    caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
    caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(error => console.error('Cache addAll error:', error))
    );
});
