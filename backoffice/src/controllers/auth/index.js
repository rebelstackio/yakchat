import axios from 'axios';

/**
 * Call yakchat auth server
 */
export function login (username, password) {
	axios.post('http://localhost:8080/api/api/v1/auth/login', 
		JSON.stringify({ username, password }), 
		{headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}}
	)
	.then((response) => {
		console.log(response);
		global.storage.dispatch({
			type: 'LOGIN-SUCCESS',
			accessLevel: 5,
			admin: false,
			uid: '0FxY4aLtrnhRaIzQAbmNNzyarN72',
			displayName: 'Grupo Paracas',
			email: 'gh-client-t01@rebeldemo.com',
			emailVerified: true
		});
		if (process.env.ENVIROMENT === 'PRODUCTION') {
			document.location.pathname = '/backoffice.html';
		} else {
			document.location.pathname = '/'
		}
		localStorage.setItem('authorization', response.headers.authorization);
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
export function signup (username, password, type, domain, displayName) {
	axios.post('http://localhost:8080/api/api/v1/auth/signup', 
		JSON.stringify({ username, password, type, domain, displayName }), 
		{headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}}
	)
	.then((response) => {
		console.log(response);
		if (process.env.ENVIROMENT === 'PRODUCTION') {
			document.location.pathname = '/backoffice.html';
		} else {
			document.location.pathname = '/'
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