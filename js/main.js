 if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/js/sw.js')
  .then ((reg) => console.log('service worker regestered', reg))
  .catch ((err) => console.log('service worker not regestered', err))}