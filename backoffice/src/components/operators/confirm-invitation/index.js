import { MetaComponent } from '@rebelstack-io/metaflux';
import './style.css';

class ConfirmInvitation extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	render () {
		const content = document.createElement('div');
		content.className = 'confirm-invitation-container';
		content.innerHTML = `
			<div class="form-header">
				<div>Title</div>
			</div>
			<div class="form-body">
				<div><input type="text" placeholder="Username"/></div>
				<div><input type="text" placeholder="Email"/></div>
				<div><input type="password" placeholder="Password"/></div>
			</div>
			<div class="form-footer">
				<div>Save</div>
			</div>
		`;
		return content;
	}
	handleStoreEvents () {
		return {
			'*': () => {
				//.
			}
		}
	}
	addListeners () {
		//.
	}
}

window.customElements.define('confirm-invitation', ConfirmInvitation);