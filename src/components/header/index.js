import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';

class Header extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.hederContent = document.createElement('div');
		this.setHeaderContent();
		return this.hederContent;
	}

	setHeaderContent () {
		this.hederContent.className = 'yak-header-itemes'
		const title = document.createElement('span');
		title.textContent = 'Yak Chat';
		this.hederContent.appendChild(title);
		this.getCloseButton();
	}

	getCloseButton () {
		this.closeButton = document.createElement('div')
		this.closeButton.className = 'yak-min-open';
		this.closeButton.addEventListener('click', () => {
			this.closeButton.classList.toggle('yak-min-close');
			this.storage.dispatch({type: 'TOGGLE-CHAT'})
		})
		this.hederContent.appendChild(this.closeButton);
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'TOGGLE-CHAT': action => {
				this.className = this.storage.getState().Main.isOpen ? 'header-up' : 'header-down';
			}
		};
	}
}

window.customElements.define('yak-header', Header);
