import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../../utils';
import sendIcon from '../../../assets/icons/paper-plane-solid.svg';
import shoppingIcon from '../../../assets/icons/cart-plus-solid.svg';
import './index.css';

class MsgInput extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	addListeners() {
		const inputButton = this.querySelector('#input-button');
		inputButton.addEventListener('click', () => {
			const input = document.querySelector('.msg-input > input');
			this.sendMessage(input);
		});
		document.querySelector('.shopping-icon').addEventListener('click', () => {
			document.querySelector('#shopping-popup-container').classList.toggle('hide');
		});
		document.querySelector('#close-shopping').addEventListener('click', ()=> {
			document.querySelector('#shopping-popup-container').classList.toggle('hide');
		})
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = instanceElement('div', ['msg-input']);
		this.createInputs(content);
		return content;
	}
	/**
	 * @description create the inputs for the msg area
	 * @param {HTMLElement} box 
	 */
	createInputs (box) {
		const not = undefined;
		const input = instanceElement(
			'input', ['bottom-input'],
			 not, not,
			 [{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		const inputButton = instanceElement(
			'div', ['icon', 'send-message-icon'],
			'input-button',
			`<img src="${sendIcon}"></img>`,
			[{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		const shopButtom = instanceElement (
			'div', ['icon', 'shopping-icon'],
			false,`
			<img src="${shoppingIcon}"> </img>
			`
		)
		input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				this.sendMessage(input);
			}
		});
		box.append(input, inputButton, shopButtom);
	}
	/**
	 * @description dispatch the send message action
	 * @param {HTMLElement} input 
	 */
	sendMessage (input) {
		if (input.value !== '') {
			this.storage.dispatch({ type: 'SEND-MESSAGE', data: input.value, msgType: 'AA' })
			input.value = '';
		}
	}
	
	handleStoreEvents () {
		return {
			
		};
	}

}

window.customElements.define('msg-input', MsgInput);
