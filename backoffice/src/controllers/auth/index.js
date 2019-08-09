import axios from 'axios';
import { jwtDecode } from '../../utils';
import  { singInWithToken }  from '../firebase';

let authInstance = axios.create({
	baseURL: process.env.AUTH_API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

/**
 * Call yakchat auth server
 */
export function login (email, password) {
	authInstance.post('/login/',
		JSON.stringify({ email, password })
	)
	.then((response) => {
		console.log(response);
		const t = response.headers.authorization;
		localStorage.setItem('udata', JSON.stringify(jwtDecode(t)))
		if (process.env.ENVIROMENT === 'PRODUCTION') {
			document.location.pathname = '/backoffice.html';
		} else {
			document.location.pathname = '/'
		}
		singInWithToken(t);
		localStorage.setItem('authorization', t);
	})
	.catch((error) => {
		console.log(error);
		global.storage.dispatch({
			type: 'LOGIN-FAIL',
			error
		});
	})
}

/**
 * Call yakchat auth server
 */
export function signup (email, password, webpage, type, displayname) {
	let obj = { displayname, password, email };
	if (type === "client") obj.webpage = webpage;
	authInstance.post('/signup/' + type, 
		JSON.stringify( obj )
	)
	.then((response) => {
		console.log(response);
		if (process.env.ENVIROMENT === 'PRODUCTION') {
			document.location.pathname = '/backoffice.html';
		} else {
			document.location.pathname = '/login/'
		}
		localStorage.setItem('authorization', response.headers.authorization);
	})
	.catch((error) => {
		console.log(error);
		global.storage.dispatch({
			type: 'SIGNUP-FAIL',
			error
		});
	})
}