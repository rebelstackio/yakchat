import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/counter';
import '../../components/input';
import '../../components/viewer';
import '../../components/header';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		this.content = document.createElement('div');
		this.content.id = 'container';
		this.input = document.createElement('yak-input');
		this.viewer = document.createElement('yak-viewer');
		const header = document.createElement('yak-header');
		global.storage.on('TOGGLE-CHAT', this.handleStoreEvent.bind(this))
		this.content.append(header, this.input, this.viewer);
		return this.content;
	}
	/**
	 * hadle the toggle chat action
	 */
	handleStoreEvent () {
		const isOpen = global.storage.getState().Main.isOpen;
		this.viewer.className = !isOpen ? 'hide' : 'show';
		this.input.className = !isOpen ? 'hide' : 'show';
		this.content.classList.toggle('no-border');
	}
}

window.customElements.define('yak-main-container', YakMainContainer);
