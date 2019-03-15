import { MetaComponent } from '@rebelstack-io/metaflux';
import { parsemkey } from '../../utils'
import './index.css';

class Viewer extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
		this.createMsgList = this.createMsgList.bind(this)
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.msgList = this.storage.getState().Main.list;
		this.listContent = document.createElement('div');
		this.createMsgList(this.msgList);
		return this.listContent;
	}
	/**
	 * create the messages list
	 */
	createMsgList (list) {
		this.listContent.innerHTML = '';
		this.listContent.className = 'yak-viewer-list';
		try {
			Object.keys(list).map((l, i) => {
				if (i !== 0) {
					const listItem = document.createElement('div');
					const msg = document.createElement('span');
					const from = document.createElement('span');
					const msgData = list[l][0].split('-');
					const isOperator = list[l].length > 1;
					const keyData = parsemkey(l);
					listItem.className = !isOperator ? 'yak-view-item-right' : 'yak-view-item-left';
					msg.className = 'yak-view-msg';
					from.className = 'yak-view-from';
					msg.textContent = atob(msgData[1]);
					from.textContent = msgData[0] + ' ' + new Date(keyData.ts).toDateString()
					listItem.append(msg, from);
					this.listContent.appendChild(listItem);
				}
			})
		} catch (er) {
			///
		}
		this.scrollTop = this.scrollHeight;
	}
	/**
	 * handle the toggle action to scroll down
	 */
	handleTogge () {
		if (this.storage.getState().Main.isOpen) {
			this.scrollTop = this.scrollHeight;
		}
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'MSG-ARRIVE': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'FB-CONNECT': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'TOGGLE-CHAT': () => {
				this.handleTogge.bind(this)
			}
		};
	}
}

window.customElements.define('yak-viewer', Viewer);
