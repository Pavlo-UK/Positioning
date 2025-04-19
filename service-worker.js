const cacheName = 'positioning-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
