import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class ShoppingCart extends MetaComponent {
	
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}

	/**
	 * add DOM listener
	 */
	addListeners() {
		//
	}

	render () {
		return `
		<div id="verification-popup-container" class="profile-popup-container">
			<div id="tepago-area"></div>
		</div>
		`;
	}
}

window.customElements.define('yak-shoppincart', ShoppingCart);
