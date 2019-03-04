import { MetaComponent } from '@rebelstack-io/metaflux';
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
			list.map((l) => {
				const listItem = document.createElement('div');
				const msg = document.createElement('span');
				const from = document.createElement('span');
				listItem.className = l.by === 'CLIENT' ? 'yak-view-item-right' : 'yak-view-item-left';
				msg.className = 'yak-view-msg';
				from.className = 'yak-view-from';
				msg.textContent = atob(l.message);
				from.textContent = l.date;
				listItem.append(msg, from);
				this.listContent.appendChild(listItem);
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
