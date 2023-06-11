const staticCacheName = 'site-static';
const assets = [
'/style.css',
'/scripts/app.js',
'/scripts/manifest.json',
'/images/background.webp',
'/images/effect.jpg',
'/images/close.png',
'/images/email.png',
'/images/work.png',
'/images/github.png',
'/views/offline.ejs'


];

self.addEventListener('install', evt => {
evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
    console.log('cash time');
    cache.addAll(assets);
    }));

});

self.addEventListener('activate', evt => {
    console.log('service worker working')
});

self.addEventListener('fetch', evt => {
// console.log('fetch event', evt);
evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
    }).catch(() => caches.match('offline.ejs'))
);
});


'use strict';
