import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Verification extends MetaComponent {
	
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
		this.querySelector('#close-verification')
		.addEventListener('click', () => {
			this.classList.add('hide');
		});
		this.querySelector('#re-send')
		.addEventListener('click', () => {
			this.handleSend();
		})
	}

	render () {
		return `
		<div id="verification-popup-container" class="profile-popup-container hide">
			<div id="verification">
				<div class="profile-title">
					<div>Please Verify your email</div>
					<span id="close-verification">X</span>
				</div>
				<span>Just go to your email and click the verification link</span>
				<p> i don't see any link </p>
				<div class="btn primary" id="re-send">Re-Send verification</div>
			</div>
		</div>
		`;
	}

	handleSend () {
		global.storage.dispatch({
			type: 'SEND-VERIFICATION'
		});
		this.querySelector('#verification-popup-container').classList.add('hide');
	}
}

window.customElements.define('yak-verification', Verification);
