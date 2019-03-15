import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import './index.css';

class Settings extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	get fbToken () {
		return this.querySelector('#fb-token').value;
	}
	get ggleToken () {
		return this.querySelector('#ggle-token').value;
	}
	set fbToken (value) {
		this.querySelector('#fb-token').value = value
	}
	set ggleToken (value) {
		this.querySelector('#ggle-token').value = value;
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = instanceElement('div', false, 'setting-box');
		const title = instanceElement('div', ['pop-title'], false, 
		`
			<h2> Settings </h2>
			<i id="set-close"> X </i>
		`
		);
		content.appendChild(title);
		this.accessLevel = this.storage.getState().Main.accessLevel;
		return content;
	}

	addListeners () {
		const closeButton = this.querySelector('#set-close');
		closeButton.addEventListener('click', () => {
			this.classList.toggle('hide');
		});
	}

	createOptions (box) {
		const optionBox = instanceElement('div', ['option-body']);
		this.createChatSettings(optionBox);
		this.createUserSettings(optionBox);
		box.appendChild(optionBox);
	}

	createUserSettings (box) {
		const userBox = instanceElement('div', ['user-settings'], false, '<h2>User settings</h2>');
		const crrntPass = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'Current Password'}]
		);
		const newPass = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'New Password'}]
		);
		const newPassRP = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'Repeat your password'}]
		);
		const Submit = instanceElement('button', ['btn', 'primary'], false, 'Submit')
		const chngPassBox = instanceElement('div', ['set-new-pass']);
		chngPassBox.append(crrntPass, newPass, newPassRP, Submit);
		Submit.addEventListener('click', () => {
			if (crrntPass.value !== '' && newPass.value !== '' && newPassRP.value !== '') {
				if (newPass.value === newPassRP.value) {
					this.storage.dispatch({
						type: 'CHNG-PASS', 
						data: {newPass: newPass.value, oldPass: crrntPass.value}
					})
				} else {
					console.error('error the password dont match')
				}
			} else {
				console.error('all the fields are mandatory')
			}
		})
		userBox.appendChild(chngPassBox);
		box.appendChild(userBox);
	}

	createChatSettings (box) {
		const enableBox = instanceElement('div', false, false, '<h3>Enable sounds</h3>');
		const enableSound = instanceElement('i', ['fa', 'fa-check-square']);
		const chatOptions = instanceElement('div', ['chat-settings'], false, '<h2>Chat settings</h2>');
		enableSound.addEventListener('click', () => {
			this.storage.dispatch({ type: 'TOGGLE-SOUND' });
		})
		chatOptions.appendChild(enableBox);
		enableBox.appendChild(enableSound);
		box.append(chatOptions);
	}

	createClientSettings () {
		const body = this.querySelector('#setting-box');
		const optionBox = this.querySelector('.option-body')
		? this.querySelector('.option-body')
		: instanceElement('div', ['option-body']);
		optionBox.innerHTML = '';
		const actionSettings = instanceElement('div', ['client-action-settings'], false,
		`
			<input type="submit" id="mail-history" value="Send Chat history to email"/>
			<input type="submit" id="dashboard" value="Dashboard"/>
		`
		);
		const storageSetting = instanceElement('div', ['client-storage-settings'], false,
		`
			<input type="text" id="fb-token" placeholder="Firebase Token"/>
			<input type="text" id="ggle-token" placeholder="Analytics Token"/>
			<input type="submit" id="save-settings" value="Save"/>
		`
		);
		storageSetting.querySelector('#save-settings')
		.addEventListener('click', () => {
			// dispatch the save event
			const fbToken = this.fbToken;
			const ggleToken = this.ggleToken;
			this.storage.dispatch({type: 'SAVE-STORAGE-SETTING', data: {
				fbToken, ggleToken
			}});
		})
		optionBox.append(actionSettings, storageSetting);
		body.appendChild(optionBox);
	}

	handleStoreEvents () {
		return {
			'TOGGLE-SOUND': (action) => {
				const { isSoundEnable } = action.newState;
				const check = 
					document.querySelector('.fa.fa-check-square') ||
					document.querySelector('.fa.fa-square');
				console.log(check);
				check.className = isSoundEnable ? 'fa fa-check-square' : 'fa fa-square'
			},
			'OPEN-SETTINGS': () => {
				if (this.accessLevel >= 5) {
					// client settings
					this.createClientSettings();
					const fbToken = Object.keys(this.storageKeys)[0];
					this.fbToken = fbToken;
					this.ggleToken = this.storageKeys[fbToken];
				} else {
					// operator
					const body = this.querySelector('#setting-box');
					this.createOptions(body);
				}
			},
			'LOGIN-SUCCESS': (state) => {
				this.accessLevel = state.newState.Main.accessLevel;
			},
			'CHANNEL-ARRIVE': (state) => {
				this.storageKeys = state.newState.Main.storageKeys;
			}
		}
	}

}

window.customElements.define('yak-settings', Settings);
