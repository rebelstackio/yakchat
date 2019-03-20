import { MetaComponent } from '@rebelstack-io/metaflux';
import defaulAvatar from '../../assets/images/user.png';
import './index.css';

class PatchProfile extends MetaComponent {
	
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}

	get email() {
		return this.querySelector('#email').value;
	}

	get password() {
		return this.querySelector('#password').value;
	}

	get displayName() {
		return this.querySelector("#display-name").value;
	}

	get currentPassword () {
		return this.querySelector('#current-password').value;
	}

	set displayName (name) {
		this.querySelector('#display-name').value = name;
	}

	set email(email) {
		this.querySelector('#email').value = email;
	}

	addListeners() {
		const input = this.querySelector('#upload');
		const preview = this.querySelector('.prof-pict > img');
		this.querySelector('#patch')
		.addEventListener('click', () => {
			this.querySelector('.profile-popup-container').classList.add('loading');
			this.handleSend(this.email, this.password, this.currentPassword , this.displayName)
		})
		input
		.addEventListener('change', (e) => {
			const pict = input.files[0];
			var reader  = new FileReader();
			reader.onloadend = function () {
				preview.src = reader.result;
				const uid = localStorage.getItem('fb-hash');
				localStorage.setItem(uid, reader.result);
			}
			if (pict) {
				reader.readAsDataURL(pict); //reads the data as a URL
				this.handleUpload(pict);
			} else {
				preview.src = "";
			}
		});
		this.querySelector('#close-profile')
		.addEventListener('click', () => {
			document.querySelector('.profile-popup-container-container').classList.add('hide');
		})
	}

	render () {
		const uid = localStorage.getItem('fb-hash');
		const profileUrl = localStorage.getItem(uid)
		? localStorage.getItem(uid)
		: defaulAvatar;
		return `
		<div class="profile-popup-container-container profile-popup-container hide">
			<div id="profile-popup">
				<div class="profile-title">
					<div>Edit profile</div>
					<span id="close-profile">X</span>
				</div>
				<div class="prof-pict">
					<img src="${profileUrl}" height="200" alt="Image preview...">
					<label for="upload" class="btn custom-file-upload light">
						Upload Image
					</label>
					<input id="upload" type="file">
				</div>
				<input type="text" placeholder="change name" id="display-name"/>
				<input type="password" placeholder="Current Password" id="current-password"/>
				<input type="password" placeholder="change password" id="password"/>
				<input type="email" placeholder="change email" id="email"/>
				<div class="btn primary" id="patch">Save Changes</div>
			</div>
		</div>
		`;
	}

	handleSend (email, password, currentPassword , displayName) {
		global.storage.dispatch({
			type: 'PATCH-PROFILE', 
			data : {
				email, password, displayName, currentPassword
			}
		});
	}

	handleUpload (img) {
		this.querySelector('.profile-popup-container').classList.add('loading');
		global.storage.dispatch({
			type: 'UPLOAD-PROFILE-IMG',
			data: {
				img,
				uid: global.storage.getState().Main.uid
			}
		})
	}

	handleStoreEvents () {
		return {
			'OPEN-PROFILE': () => {
				const {displayName, email} = global.storage.getState().Main;
				this.displayName = displayName;
				this.email = email;
			},
			'PROFILE-CHANGED': () => {
				this.querySelector('.profile-popup-container').classList.remove('loading');
			},
			'UPLOAD-SUCCESS': () => {
				this.querySelector('.profile-popup-container').classList.remove('loading');
			}
		}
	}

}

window.customElements.define('yak-patchprofile', PatchProfile);
