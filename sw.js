// sw.js - Requis pour le critère d'installation Android
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Obligatoire : doit être présent même s'il est vide 
    // pour que le navigateur considère l'app comme offline-capable
    event.respondWith(fetch(event.request).catch(() => {
        return caches.match(event.request);
    }));
});
