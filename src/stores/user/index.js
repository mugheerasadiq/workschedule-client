import { createAction, handleActions } from 'redux-actions';

import { USER_TYPES } from './type';
import { userState } from './state';

import {
	createImmutableState,
	createPromiseThunk,
	createPromiseState,
	getAccessToken,
} from '../redux';

import * as userApi from 'services/user';

export const onLogout = createAction(USER_TYPES.LOGOUT);

export const onGetUsers = createPromiseThunk(
	USER_TYPES.GET_USERS,
	userApi.getUsers,
	getAccessToken,
);

export const onGetUser = createPromiseThunk(
	USER_TYPES.GET_USER,
	userApi.getUser,
	getAccessToken,
);

export const onUpdateUser = createPromiseThunk(
	USER_TYPES.UPDATE_USER,
	userApi.updateUser,
	getAccessToken,
);

export const onDeleteUser = createPromiseThunk(
	USER_TYPES.DELETE_USER,
	userApi.deleteUser,
	getAccessToken,
);

export default handleActions(
	{
		[USER_TYPES.SET_LOGINED]: (state, action) => {
			const user = action?.payload?.user;
			const accessToken = action?.payload?.accessToken;

			return state
				.setIn(['logined', 'user'], user)
				.setIn(['logined', 'accessToken'], accessToken)
				.setIn(['logined', 'loginTime'], new Date());
		},
		[USER_TYPES.LOGOUT]: (state, _) => {
			return userState;
		},
		[USER_TYPES.GET_USER]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'user', loadingState);
		},
		[USER_TYPES.GET_USER_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'user', doneState);
		},
		[USER_TYPES.GET_USER_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'user', errorState);
		},
		[USER_TYPES.GET_USERS]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'users', loadingState);
		},
		[USER_TYPES.GET_USERS_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload?.users);
			return createImmutableState(state, 'users', doneState);
		},
		[USER_TYPES.GET_USERS_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'users', errorState);
		},
		[USER_TYPES.UPDATE_USER]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'updated', loadingState);
		},
		[USER_TYPES.UPDATE_USER_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'updated', doneState);
		},
		[USER_TYPES.UPDATE_USER_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'updated', errorState);
		},
		[USER_TYPES.DELETE_USER]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'deleted', loadingState);
		},
		[USER_TYPES.DELETE_USER_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'deleted', doneState);
		},
		[USER_TYPES.DELETE_USER_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'deleted', errorState);
		},
	},
	userState,
);
