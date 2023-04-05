if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
    .then((reg) => console.log('service worker online', reg))
    .catch((err) => console.log('service worker broke', err))
  } 