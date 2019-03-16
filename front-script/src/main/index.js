import '../containers/main-container'
import md5 from 'md5';

String.prototype.md5Encode = function(){
	return md5(this)
}

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('yak-main-container');
	document.querySelector('#yak-chat-embended').appendChild(container);
})
