const staticCacheName = 'site-static';
//een array van alle items die gecached worden door de service worker en later gefetched kunnen worden
const assets = [
'/',
'/style.css',
'/scripts/app.js',
'/scripts/manifest.json',
'/images/background.webp',
'/images/pfpic.webp',
'/images/effect.jpg',
'/images/close.png',
'/images/email.png',
'/images/work.png',
'/images/github.png'
];
//deze function cached alles wat in de array zit
self.addEventListener('install', evt => {
evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
    console.log('cash time');
    cache.addAll(assets);
    }));

});
//checked of de service worker online is.
self.addEventListener('activate', evt => {
    console.log('service worker working')
});
//fetched the caches en laat weten of er errors zijn
self.addEventListener('fetch', evt => {
// console.log('fetch event', evt);
evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
    })
);
});