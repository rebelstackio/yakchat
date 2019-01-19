import { MetaComponent } from '@rebelstack-io/metaflux';

class yakInput extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
		this.createInput = this.createInput.bind(this);
		this.createButton = this.createButton.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'yak-input-content';
		this.createButton();
		this.createInput();
		content.appendChild(this.input);
		content.appendChild(this.send);
		return content;
	}
	/**
	 * create the main input & handle
	 */
	createInput () {
		this.input = document.createElement('input');
		this.input.setAttribute('type', 'text');
		this.input.className = 'main-input';
		this.input.addEventListener('click', () => {
			this.className = 'focus';
		});
		this.input.addEventListener('focusout', () => {
			this.className = '';
		});
		this.input.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				this.handleSend();
			}
		})
	}
	/**
	 * create the send button & handle
	 */
	createButton () {
		this.send = document.createElement('div');
		this.send.className = 'yak-send-disable';
		const text = document.createElement('p');
		text.textContent = 'Send';
		this.send.appendChild(text);
		this.send.addEventListener('click', this.handleSend);
	}
	/**
	 * function handle, dispatch send message action
	 */
	handleSend () {
		if (this.input.value !== '') {
			const msg = {type: 'text', from: {name: 'you'}, msg: this.input.value, date: 'a sec ago'}
			global.storage.dispatch({
				type: 'SEND-MESSAGE',
				msg: msg
			})
		}
		this.input.value = '';
		this.send.className = 'yak-send-disable';
	}
}

window.customElements.define('yak-input', yakInput);
