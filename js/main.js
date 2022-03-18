const aChoices = ["yes", "no", "maybe", "most definitely", "I think so"];

document.getElementById("magic8ball").addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const nChoice = Math.floor(Math.random() * aChoices.length);
    document.getElementById("answer").innerHTML = aChoices[nChoice];
});

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

  navigator.serviceWorker.register('/service-worker.js')

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
  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
        console.error('ServiceWorker registration failed: ', registrationError)
      })
    })
  }
  