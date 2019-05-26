import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import defaulAvatar from '../../assets/images/user.svg';
import cog from '../../assets/icons/cog-solid.svg';
import searchIcon from '../../assets/icons/search-solid.svg';
import enevelope from '../../assets/icons/envelope-solid.svg';
import closeIcon from '../../assets/icons/times-solid.svg';
import peruFlag from '../../assets/icons/flags/PE.svg'
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
		const close = instanceElement('img', ['mobile-only'], false, false, [{src: closeIcon}]);
		const uid = localStorage.getItem('fb-hash');
		this.channelList = global.storage.getState().Main.channelList;
		this.accessLevel = global.storage.getState().Main.accessLevel;
		const urlImg = localStorage.getItem(uid) ? localStorage.getItem(uid) : defaulAvatar;
		// where the channels or channel will be deplayed
		const chnlBox = instanceElement('div', ['channel-box'], 'channel-t0');
		// list of trheads
		const thBox = instanceElement('ol', false, 'threads');
		// profile img and name
		const profile = instanceElement(
			'div',
			['side-profile'],
			false,
			`
				<img src="${urlImg}" class="profile-img"></img>
				<span id="user-name"><span>
			`
		);
		// search input
		const search = instanceElement(
			'div',
			['search-box'],
			false,
			`<input type="text" class="search-input"></input>
			 <img src="${searchIcon}"></img>
			`
		);
		content.append(close ,profile, search, chnlBox, thBox);
		return content;
	}
	/**
	 * add DOM listeners
	 */
	addListeners () {
		// search
		this.querySelector('.search-input')
		.addEventListener('keydown', () => {
			if (this.searchValue === '') {
				// full array
				const { threads, allThreads } = this.storage.getState().Main;
				const selector = document.querySelector('#channel-select')
					? document.querySelector('#channel-select').value
					: '*';
				const currentThread = selector == '0'
					? allThreads
					: threads;
				this.listSelectedThreads(currentThread);
			} else {
				this.handleSearch();
			}
		});
		// profile image
		this.querySelector('.profile-img')
		.addEventListener('click', () => {
			global.storage.dispatch({ type: 'OPEN-PROFILE' })
			document.querySelector('.profile-popup-container-container').classList.remove('hide');
		});
		//close btn
		this.querySelector('.mobile-only').addEventListener('click', () => {
			const sideBar = document.querySelector('.loby-side-menu');
			const mainContent = document.querySelector('yak-loby > div');
			if (sideBar.classList.contains('toggled')) {
				sideBar.classList.remove('toggled');
				mainContent.classList.remove('toggled');
			} else {
				sideBar.classList.add('toggled');
				mainContent.classList.add('toggled');
			}
		});
	}
	/**
	 * create the view for the client t0-MVP
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
	/**
	 * create the view for the operator
	 * @param {Object} channelList 
	 */
	createOperatorView (channelList) {
		const chnlBox = this.querySelector('#channel-t0');
		chnlBox.innerHTML = '';
		const selector = instanceElement('select', false, 'channel-select',
			`
				<option value="0"> All </option>
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
			if (selector.value != 0) {
				const threads = this.storage.getState().Main.channelList[selector.value];
				this.storage.dispatch({
					type: 'THREAD-SELECTED',
					threads: threads[4] ? threads[4] : {},
					DID: selector.value
				})
				document.querySelector('.msg-body').innerHTML = '';
				this.listSelectedThreads(threads[4] ? threads[4] : {});
			} else {
				const { allThreads } = this.storage.getState().Main;
				this.listSelectedThreads(allThreads)
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
			const random = Math.floor(Math.random()*(999-100+1)+100);
			let isNew = false;
			if (oldThreads[uid]) {
				isNew = JSON.stringify(oldThreads[uid]) !== JSON.stringify(msgObject[uid])
			}
			const type = msgObject[uid][0] === ''
				? `
					Visitor
					<span class="bottom">
						190.234.15.${random} Pisco - Peru
						<img class="flag" src="${peruFlag}">
					</span>
					<img src="${enevelope}" class="${isNew ? '' : 'hide'}"></img>
				`
				: `
					${msgObject[uid][0].split('-')[0]}
					<span class="bottom">
						${msgObject[uid][0].split('-')[1]}
						<img class="flag" src="${peruFlag}">
					</span>
					<img src="${enevelope}" class="${isNew ? '' : 'hide'}"></img>
				`
			const li = instanceElement('li', ['thread-item'], 'id-' + uid, type);
			li.addEventListener('click', () => {
				const envelope = document.querySelector('#id-' + uid + '>img');
				if (!envelope.classList.contains('hide')) {
					envelope.classList.add('hide');
				}
				this.storage.dispatch({type: 'CHAT-SELECTED', data: {
					clientSelected: type,
					messages: msgObject[uid],
					visitorId: uid,
					chnlId: msgObject[uid].chnlId
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
		const { threads, allThreads } = this.storage.getState().Main;
		const selector = document.querySelector('#channel-select')
			? document.querySelector('#channel-select').value
			: '*';
		const currentThread = selector == '0'
			? allThreads
			: threads;
		let newObject = {};
		Object.keys(currentThread).forEach(key => {
			const userdata = currentThread[key][0] !== '' ? currentThread[key][0] : 'New User-unknown';
			const name = userdata.split('-')[0];
			const email = userdata.split('-')[1];
			if (name.toUpperCase().startsWith(this.searchValue.toUpperCase()) || 
				email.toUpperCase().startsWith(this.searchValue.toUpperCase())
			) {
				newObject[key] = currentThread[key]
			}
		});
		this.listSelectedThreads(newObject);
	}
	/**
	 * handle the storage events
	 */
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
				const { channelList, chnlUid, allThreads } = this.storage.getState().Main;
				this.createOperatorView(channelList);
				if (chnlUid !== 0) {
					this.listSelectedThreads(channelList[chnlUid][4]);
				} else {
					this.listSelectedThreads(allThreads);
				}
			}
		}
	}
}

window.customElements.define('yak-sidebar', Sidebar);
