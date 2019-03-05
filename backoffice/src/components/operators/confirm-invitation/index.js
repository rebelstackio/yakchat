import { MetaComponent } from '@rebelstack-io/metaflux';
import './style.css';

class ConfirmInvitation extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	render () {
		const content = document.createElement('div');
		content.className = 'confirm-invitation-container';
		const params = document.location.hash.split('?')[1];
		const key = params.match('k=([^&]+)')[1];
		const mail = params.match('m=([^&]+)')[1];
		const name = params.match('n=([^&]+)')[1]
		content.innerHTML = `
			<div class="form-header">
				<div>Title</div>
			</div>
			<div class="form-body">
				<div><input id="user-name" type="text" value="${name ? name: ''}" placeholder="Username"/></div>
				<div><input id="user-mail" type="text" value="${mail ? mail: ''}" placeholder="Email"/></div>
				<div><input id="user-password" type="password" placeholder="Password"/></div>
			</div>
			<div class="form-footer">
				<div id="subscribe" class="btn primary">Save</div>
			</div>
		`;
		content.querySelector('#subscribe').addEventListener('click', () => {
			const m = content.querySelector('#user-mail').value;
			const un = content.querySelector('#user-name').value;
			const ps = content.querySelector('#user-password').value;
			if (m !== '' & un !== '' & ps !== '' & key !== '') {
				this.storage.dispatch({type: 'ACEPT-INVITATION', data: {m, un, ps, key}});
			}
		})
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