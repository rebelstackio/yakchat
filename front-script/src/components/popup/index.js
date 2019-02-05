import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Popup extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'yak-popup-content';
		return content;
	}

}

window.customElements.define('yak-popup', Popup);
