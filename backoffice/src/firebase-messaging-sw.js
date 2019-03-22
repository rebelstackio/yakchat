importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js');

workbox.core.setCacheNameDetails({ prefix: 'yakchat-cache-v1' });

workbox.precaching.suppressWarnings();

// Placeholder array which is populated automatically by workboxBuild.injectManifest()
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// firebase.initializeApp({
// 	'messagingSenderId': '20591052421'
// });

// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
// 	console.log('[firebase-messaging-sw.js] Received background message ', payload);
// 	// Customize notification here
// 	var notificationTitle = 'Background Message Title';
// 	var notificationOptions = {
// 		body: 'Background Message body.',
// 		icon: imageURL
// 	};

// 	return self.registration.showNotification(
// 		notificationTitle,
// 		notificationOptions
// 	);
// });