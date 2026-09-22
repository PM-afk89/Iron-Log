// Minimal service worker. Its only job is to exist, so iOS treats this
// as a real installable PWA (which gets much stronger local storage
// persistence guarantees than a plain "Add to Home Screen" bookmark).
self.addEventListener("install", function(event) {
  self.skipWaiting();
});
self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function(event) {
  // Pass-through: no caching behavior, just network as normal.
});
