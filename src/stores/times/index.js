import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

import { timesState } from './state';
import { TIMES_TYPES } from './type';

import {
	createImmutableState,
	createPromiseThunk,
	createPromiseState,
	getAccessToken,
} from 'stores/redux';

import * as timesApi from 'services/times';

const setTags = ({ dispatch, data }) => {
	let tags = [];

	const categories = data?.timeCategories;
	if (categories.length > 0) {
		categories.forEach((category) => {
			const timeTags = category?.timeTags;
			if (timeTags.length > 0) {
				timeTags.forEach((tag) => {
					tags.push(tag);
				});
			}
		});
	}
	console.log('setTags...', tags);
	dispatch({ type: TIMES_TYPES.SET_TAGS, payload: tags });
};

export const onGetCategories = createPromiseThunk(
	TIMES_TYPES.GET_CATEGORIES,
	timesApi.getCategories,
	getAccessToken,
	{ after: [setTags] },
);
export const onCreateCategory = createPromiseThunk(
	TIMES_TYPES.CREATE_CATEGORY,
	timesApi.createCategory,
	getAccessToken,
);

export const onCreateTag = createPromiseThunk(
	TIMES_TYPES.CREATE_TAG,
	timesApi.createTag,
	getAccessToken,
);

export default handleActions(
	{
		[TIMES_TYPES.GET_CATEGORIES]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'categories', loadingState);
		},
		[TIMES_TYPES.GET_CATEGORIES_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'categories', doneState);
		},
		[TIMES_TYPES.GET_CATEGORIES_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'categories', errorState);
		},
		[TIMES_TYPES.CREATE_CATEGORY]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'created', loadingState);
		},
		[TIMES_TYPES.CREATE_CATEGORY_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'created', doneState);
		},
		[TIMES_TYPES.CREATE_CATEGORY_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'created', errorState);
		},
		[TIMES_TYPES.UPDATE_CATEGORY]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'updated', loadingState);
		},
		[TIMES_TYPES.UPDATE_CATEGORY_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'updated', doneState);
		},
		[TIMES_TYPES.UPDATE_CATEGORY_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'updated', errorState);
		},
		[TIMES_TYPES.DELETE_CATEGORY]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'deleted', loadingState);
		},
		[TIMES_TYPES.DELETE_CATEGORY_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'deleted', doneState);
		},
		[TIMES_TYPES.DELETE_CATEGORY_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'deleted', errorState);
		},
		[TIMES_TYPES.SET_TAGS]: (state, action) => {
			return state
				.setIn(['tags', 'done'], true)
				.setIn(['tags', 'data'], action?.payload);
		},
		[TIMES_TYPES.CREATE_TAG]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'created', loadingState);
		},
		[TIMES_TYPES.CREATE_TAG_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'craeted', doneState);
		},
		[TIMES_TYPES.CREATE_TAG_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'created', errorState);
		},
		[TIMES_TYPES.UPDATE_TAG]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'updated', loadingState);
		},
		[TIMES_TYPES.UPDATE_TAG_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'updated', doneState);
		},
		[TIMES_TYPES.UPDATE_TAG_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'updated', errorState);
		},
		[TIMES_TYPES.DELETE_TAG]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'deleted', loadingState);
		},
		[TIMES_TYPES.DELETE_TAG_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'deleted', doneState);
		},
		[TIMES_TYPES.DELETE_TAG_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'deleted', errorState);
		},
	},
	timesState,
);
