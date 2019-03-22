import '../containers/main-container'

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('yak-main-container');
	document.body.appendChild(container);
	if (!Notification) {
		console.warn('Desktop notifications not available in your browser.'); 
	} else {
		// the browser support notifications
		if (Notification.permission !== "granted"){
			// ask for permission for notifications
			Notification.requestPermission();
		}
	}
});

