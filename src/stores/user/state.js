import { Map } from 'immutable';

import { initialState } from '../state';

export const userState = Map({
	logined: Map({
		user: Map({}),
		accessToken: null,
		loginTime: null,
	}),
	users: initialState.list,
	user: initialState.object,
	updated: initialState.object,
	deleted: initialState.object,
});
