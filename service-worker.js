const CACHE_NAME = "scotland2025-cache-v1";
const urlsToCache = [
  "/scotland2025/",
  "/scotland2025/index.html",
  "/scotland2025/manifest.json",
  "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Playfair+Display:wght@500&display=swap"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
