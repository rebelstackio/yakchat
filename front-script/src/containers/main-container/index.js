import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/input';
import '../../components/viewer';
import '../../components/header';
import '../../components/signup';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		this.content = document.createElement('div');
		this.content.id = 'container';
		this.content.className = 'simple-chatbox';
		this.input = document.createElement('yak-input');
		this.viewer = document.createElement('yak-viewer');
		const header = document.createElement('yak-header');
		global.storage.on('TOGGLE-CHAT', this.handleMinEvent.bind(this));
		global.storage.on('SING-UP-REQ', this.handleSignEvent.bind(this));
		this.content.append(header, this.input, this.viewer);
		this.createSignUpForm();
		this.getParameters();
		return this.content;
	}
	/**
	 * API get client parameters
	 */
	getParameters () {
		const base = document.querySelector('#yak-chat-embended');
		this.applyStyles(base);
		var observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					this.applyStyles(base);
				}
			});
		});
		observer.observe(base, {
			attributes: true 
		});
	}
	/**
	 * aply the styles from the custom attributes
	 * @param {HTMLElement} base 
	 */
	applyStyles(base) {
		if (base.getAttribute('bg-color') !== null) {
			const bgColors = base.getAttribute('bg-color').split(',');
			// container background color
			this.content.style.background = bgColors[0];
			// msg container background  
			this.viewer.style.background = bgColors[1];
		}
		if (base.getAttribute('color') !== null) {
			this.content.style.color = base.getAttribute('color');
		}
		if (base.getAttribute('is-popup') !== null) {
			console.log(base.getAttribute('is-popup'));
			const bubble = document.createElement('div');
			bubble.innerHTML = ` <i class="fa fa-comment"></i> `;
			bubble.id = 'yak-toggler';
			document.body.appendChild(bubble);
		}
	}
	/**
	 * @description create the sigup form by default has the class .hide
	 */
	createSignUpForm () {
		const signpup = document.createElement('yak-signup');
		signpup.classList.add('hide');
		global.storage.dispatch({ type: 'SING-ANONYMOUS' })
		this.content.appendChild(signpup);
	}
	/**
	 * @description hadle the toggle chat action
	 */
	handleMinEvent () {
		const isOpen = global.storage.getState().Main.isOpen;
		this.viewer.className = !isOpen ? 'hide' : 'show';
		this.input.className = !isOpen ? 'hide' : 'show';
		this.content.classList.toggle('no-border');
	}
	/**
	 * @description toggle between the sign-up and the message viewver
	 */
	handleSignEvent () {
		this.viewer.classList.toggle('hide');
		this.input.classList.toggle('hide');
		const signup = document.querySelector('yak-signup');
		signup.classList.toggle('hide');
		if (signup.classList.contains('hide')) {
			document.querySelector('.fa.fa-user-secret').className = 'fa fa-user';
		} else {
			document.querySelector('.fa.fa-user').className = 'fa fa-user-secret';
		}
	}
}

window.customElements.define('yak-main-container', YakMainContainer);
