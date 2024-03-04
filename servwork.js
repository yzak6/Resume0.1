//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_Mipagina';
const urlsToCache = [
    '/yzak6.github.io/',
    '/yzak6.github.io/script.js',
    '/yzak6.github.io/img/favicon.png',
    '/yzak6.github.io/img/yogif.gif',
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

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
    caches.keys()
        .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
            if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
            }
        })
        ))
    );
});
