import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';

class yakInput extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
		this.msg = '';
		this.handleInput = this.handleInput.bind(this);
		this.setInput = this.setInput.bind(this);
		this.setButton = this.setButton.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		this.input = document.createElement('input');
		this.send = document.createElement('div');
		this.setButton();
		this.setInput();
		content.className = 'yak-input-content';
		content.appendChild(this.input);
		content.appendChild(this.send);
		return content;
	}
	/**
	 * set the input & handle events
	 */
	setInput () {
		this.input.setAttribute('type', 'text');
		this.input.className = 'main-input';
		this.input.addEventListener('click', () => {
			this.className = 'focus';
		});
		this.input.addEventListener('input', this.handleInput);
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
	 * set the button & handle events
	 */
	setButton () {
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
		if (this.msg !== '') {
			const msg = {type: 'text', from: {name: 'you'}, msg: this.msg, date: 'a sec ago'}
			this.storage.dispatch({
				type: 'SEND-MESSAGE',
				msg: msg
			})
		}
		this.msg = '';
		this.input.value = '';
		this.send.className = 'yak-send-disable';
	}
	/**
	 * handle the main input content & enable send button
	 */
	handleInput (e) {
		if (e.inputType === 'insertText') {
			this.msg = this.msg ? this.msg + e.data : e.data;
			this.send.className = 'yak-send-enable';
		} else {
			const splited = this.msg.split('');
			this.msg = splited.splice(0, splited.length - 1).join('');
			this.send.className = this.msg !== '' ? 'yak-send-enable' : 'yak-send-disable';
		}
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'INCREMENT': action => {
				this.text.textContent = this.storage.getState().Main.value;
			}
		};
	}
}

window.customElements.define('yak-input', yakInput);
