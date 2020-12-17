import { createAction, handleActions } from 'redux-actions';

import {
	createImmutableState,
	createPromiseThunk,
	createPromiseState,
} from '../redux';

import { USER_TYPES } from '../user/type';

import { authState } from './state';
import { AUTH_TYPES } from './type';

import * as authApi from 'services/auth';

const setUser = ({ dispatch, data }) => {
	console.log(`setUser`, data);
	return dispatch({ type: USER_TYPES.SET_LOGINED, payload: data });
};

const setReset = ({ dispatch, _ }, payload) => {
	return dispatch({ type: AUTH_TYPES.RESET, payload });
};

export const onReset = createAction(AUTH_TYPES.RESET);
export const onLogin = createPromiseThunk(AUTH_TYPES.LOGIN, authApi.login, {
	after: [setUser, (props) => setReset(props, 'login')],
});
export const onRegister = createPromiseThunk(
	AUTH_TYPES.REGISTER,
	authApi.register,
	{ after: [setReset, (props) => setReset(props, 'register')] },
);

export default handleActions(
	{
		[AUTH_TYPES.RESET]: (state, action) => {
			const type = action.payload;
			return state.set(type, authState.get(type));
		},
		[AUTH_TYPES.LOGIN]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'login', loadingState);
		},
		[AUTH_TYPES.LOGIN_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'login', doneState);
		},
		[AUTH_TYPES.LOGIN_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'login', errorState);
		},
		[AUTH_TYPES.REGISTER]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'register', loadingState);
		},
		[AUTH_TYPES.REGISTER_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'register', doneState);
		},
		[AUTH_TYPES.REGISTER_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.paylaod);
			return createImmutableState(state, 'register', errorState);
		},
	},
	authState,
);
