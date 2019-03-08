import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import './index.css';
class Sidebar extends MetaComponent {
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		const uid = localStorage.getItem('fb-hash');
		const urlImg = localStorage.getItem(uid) ? localStorage.getItem(uid) : '';
		const profile = instanceElement(
			'div',
			['side-profile'],
			false,
			`
				<img src="${urlImg}" class="profile-img"></img>
			`
		);
		profile.querySelector('.profile-img')
		.addEventListener('click', () => {
			document.querySelector('#profile-popup').classList.toggle('hide');
		})
		const search = instanceElement(
			'div',
			['search-box'],
			false,
			`<input type="text" class="search-input"></input>
			 <i class="fa fa-search"></i>
			`
		);
		content.append(profile, search);
		this.createChnlView(content);
		return content;
	}

	selectChat (cl) {
		global.storage.dispatch({ type: 'CHAT-SELECTED', data: cl });
	}

	createChnlView (el) {
		const { chnlList } = global.storage.getState().Main;
		const chnlBox = instanceElement('div', ['channel-box'])
		try {
			chnlList.forEach(chnl => {
				const chEl = instanceElement('div', ['collapse'], false,
				`<span class="chnl-title">
					${chnl.title} 
				 	<i class="fa fa-caret-right"></i>
				 </span>`
				 );
				chEl.querySelector('.chnl-title').addEventListener('click', () => {
					chEl.classList.toggle('collapse');
				})
				const ul = instanceElement('ul');
				chnl.clientList.forEach(cl => {
					const li = instanceElement('li', false, cl.id, cl.name);
					li.addEventListener('click', () => {
						this.selectChat(cl);
					})
					ul.appendChild(li);
				})
				chEl.appendChild(ul);
				chnlBox.appendChild(chEl);
			});
			el.appendChild(chnlBox);
		} catch (err) {
			//
		}
	}
}

window.customElements.define('yak-sidebar', Sidebar);
