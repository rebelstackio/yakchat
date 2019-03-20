import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import defaulAvatar from '../../images/user.svg';
import cog from '../../css/icons/cog-solid.svg';
import searchIcon from '../../css/icons/search-solid.svg';
import enevelope from '../../css/icons/envelope-solid.svg';
import './index.css';
class Sidebar extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	get searchValue () {
		return this.querySelector('.search-input').value;
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = instanceElement('div', false, 'sidebar-content');
		const uid = localStorage.getItem('fb-hash');
		this.channelList = global.storage.getState().Main.channelList;
		this.accessLevel = global.storage.getState().Main.accessLevel;
		const urlImg = localStorage.getItem(uid) ? localStorage.getItem(uid) : defaulAvatar;
		const chnlBox = instanceElement('div', ['channel-box'], 'channel-t0');
		const thBox = instanceElement('ol', false, 'threads');
		const profile = instanceElement(
			'div',
			['side-profile'],
			false,
			`
				<img src="${urlImg}" class="profile-img"></img>
				<span id="user-name"><span>
			`
		);
		profile.querySelector('.profile-img')
		.addEventListener('click', () => {
			global.storage.dispatch({ type: 'OPEN-PROFILE' })
			document.querySelector('.profile-popup-container-container').classList.remove('hide');
		})
		const search = instanceElement(
			'div',
			['search-box'],
			false,
			`<input type="text" class="search-input"></input>
			 <img src="${searchIcon}"></img>
			`
		);
		content.append(profile, search, chnlBox, thBox);
		return content;
	}

	addListeners () {
		this.querySelector('.search-input')
		.addEventListener('keydown', () => {
			if (this.searchValue === '') {
				// full array
				const { threads } = this.storage.getState().Main;
				this.listSelectedThreads(threads);
			} else {
				this.handleSearch();
			}
		})
	}

	selectChat (cl) {
		global.storage.dispatch({ type: 'CHAT-SELECTED', data: cl });
	}
	/**
	 * create the 
	 * @param {Arrya} channelList 
	 */
	createClientView (channelList, domain) {
		const sidebar = this.querySelector('#sidebar-content');
		const chnlBox = this.querySelector('#channel-t0')
		chnlBox.innerHTML = '';
		channelList.forEach(chnl => {
			const chEl = instanceElement('div', ['collapse'], false,
				`<span class="chnl-title">
					${chnl.title ? chnl.title : 'add'} 
				 	<img src="${cog}"></img>
				 </span>`
			);
			chEl.querySelector('img')
			.addEventListener('click', () => {
				document.querySelector('#channel-popup-container.profile-popup-container').classList.toggle('hide');
				global.storage.dispatch({
					type: 'CHANNEL-SELECT',
					data: {
						channel: chnl.title ? chnl.title : '',
						domain
					}
				})
			})
			chnlBox.appendChild(chEl);
		});
		sidebar.appendChild(chnlBox);
	}

	createOperatorView (channelList) {
		const chnlBox = this.querySelector('#channel-t0');
		chnlBox.innerHTML = '';
		const selector = instanceElement('select', false, 'channel-select',
			`
				<option value="0"> Select Channel </option>
			`
		);
		Object.keys(channelList).forEach((key) => {
			const option = instanceElement('option', false, key,
				channelList[key][2] ? channelList[key][2] : 'NOT-SET',
				[{value: key}]
			);
			selector.appendChild(option);
		});
		selector.addEventListener('change', () => {
			if (this.selectChannel != 1) {
				const threads = this.storage.getState().Main.channelList[selector.value];
				this.storage.dispatch({
					type: 'THREAD-SELECTED',
					threads: threads[4] ? threads[4] : {},
					DID: selector.value
				})
				document.querySelector('.msg-body').innerHTML = '';
				this.listSelectedThreads(threads[4] ? threads[4] : {});
			}
		})
		chnlBox.appendChild(selector);
	}

	/**
	 * list the selected threads into view
	 */
	listSelectedThreads(msgObject) {
		const sidebar = this.querySelector('#sidebar-content');
		const thBox = this.querySelector('#threads');
		const { oldThreads } = this.storage.getState().Main;
		thBox.innerHTML = '';
		Object.keys(msgObject).forEach(uid => {
			let isNew = false;
			if (oldThreads[uid]) {
				isNew = JSON.stringify(oldThreads[uid]) !== JSON.stringify(msgObject[uid])
			}
			const type = msgObject[uid][0] === ''
				? `
					New User
					<span>unknown</span>
					${isNew ? '<img src="'+ enevelope +'"></img>': ''}
				`
				: `
					${msgObject[uid][0].split('-')[0]}
					<span>${msgObject[uid][0].split('-')[1]}</span>
					${isNew ? '<img src="'+ enevelope +'"></img>': ''}
				`
			const li = instanceElement('li', ['thread-item'], uid, type);
			li.addEventListener('click', () => {
				this.storage.dispatch({type: 'CHAT-SELECTED', data: {
					clientSelected: type,
					messages: this.storage.getState().Main.threads[uid],
					visitorId: uid
				}})
			})
			thBox.appendChild(li);
		});
		sidebar.appendChild(thBox);
	}
	/**
	 * handle search
	 */
	handleSearch () {
		const { threads } = this.storage.getState().Main;
		let newObject = {};
		Object.keys(threads).forEach(key => {
			const userdata = threads[key][0] !== '' ? threads[key][0] : 'New User-unknown';
			const name = userdata.split('-')[0];
			const email = userdata.split('-')[1];
			if (name.toUpperCase().startsWith(this.searchValue.toUpperCase()) || 
				email.toUpperCase().startsWith(this.searchValue.toUpperCase())
			) {
				newObject[key] = threads[key]
			}
		});
		this.listSelectedThreads(newObject);
	}

	handleStoreEvents () {
		return {
			'CHANNEL-ARRIVE': (state) => {
				const channelList = this.storage.getState().Main.channelList;
				const domain = this.storage.getState().Main.domain;
				const threads = this.storage.getState().Main.threads;
				this.createClientView(channelList,domain);
				this.listSelectedThreads(threads);
			},
			'LOGIN-SUCCESS': () => {
				this.querySelector('#user-name').innerHTML = this.storage.getState().Main.displayName;
			},
			'PROFILE-CHANGED': (state) => {
				const { displayName } = state.newState.Main;
				this.querySelector('#user-name').innerHTML = displayName;
			},
			'UPLOAD-SUCCESS': () => {
				const {uid} = this.storage.getState().Main;
				this.querySelector('.profile-img').src = localStorage.getItem(uid);
			},
			'OPERATOR-DATA': () => {
				const { channelList } = this.storage.getState().Main;
				this.createOperatorView(channelList);
			}
		}
	}
}

window.customElements.define('yak-sidebar', Sidebar);
