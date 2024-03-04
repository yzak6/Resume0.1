;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_Mipagina',
  urlsToCache = [
    'https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Lexend+Deca:wght@100..900&display=swap',
    'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    '../style.css',
    '../script.js',
    'img/favicon.png',
    'img/yogif.gif',
  ]

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
