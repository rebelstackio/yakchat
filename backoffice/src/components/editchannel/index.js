import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class EditChannel extends MetaComponent {
	
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}

	get domain() {
		return this.querySelector('#domain').value;
	}

	get channelName() {
		return this.querySelector('#channel-name').value;
	}

	set domain (domain) {
		this.querySelector('#domain').value = domain;
	}

	set channelName(chnName) {
		this.querySelector('#channel-name').value = chnName;
	}

	set embendCode (code) {
		this.querySelector('#embend-code').value = code;
	}
	addListeners() {
		const embendInput = this.querySelector('#embend-code');
		this.querySelector('#update-channel')
		.addEventListener('click', () => {
			this.handleSend(this.channelName, this.domain);
		});
		this.querySelector('#close-channel')
		.addEventListener('click', () => {
			this.querySelector('#channel-popup').classList.add('hide');
		});
		embendInput.addEventListener('click', () => {
			embendInput.select();
			/* Copy the text inside the text field */
			document.execCommand("copy");
			const value = embendInput.value;
			embendInput.value = 'copied to the clipboard';
			setTimeout(() => {
				embendInput.value =  value;
			}, 400);
		});
	}

	render () {
		return /*html*/`
		<div class="hide" id="channel-popup">
			<div class="profile-title">
				<h2> edit channel </h2>
				<span id="close-channel">X</span>
			</div>
			<input type="text" placeholder="channel name" id="channel-name"/>
			<input type="text" placeholder="change domain" id="domain"/>
			<input type="text" placeholder="Embend code" id="embend-code" readonly/>
			<input type="submit" id="update-channel" value="save"/>
		</div>
		`;
	}

	handleSend (channel, domain) {
		const uid = localStorage.getItem('fb-hash');
		global.storage.dispatch({
			type: 'UPDATE-CHANNEL', 
			data : {
				channel, domain, uid
			}
		});
	}

	handleStoreEvents () {
		return {
			'CHANNEL-SELECT': (action) => {
				this.domain = action.data.domain;
				this.channelName = action.data.channel;
				this.embendCode = `<iframe src="our-source/?d=${action.data.domain}&c=${action.data.channel}"></iframe>`;
			},
			'CHANNEL-ARRIVE': () => {
				this.querySelector('#channel-popup').classList.add('hide');
			}
		}
	}
}

window.customElements.define('yak-editchannel', EditChannel);
