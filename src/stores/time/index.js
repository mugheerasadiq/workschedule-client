import { handleActions } from 'redux-actions';

import { timeState } from './state';
import { TIME_TYPES } from './type';

import {
	createImmutableState,
	createPromiseThunk,
	createPromiseState,
	getAccessToken,
} from 'stores/redux';

import * as timeApi from 'services/time';

import { getTimeDifference } from 'utils';

const getTagListObjectFromCategories = (categories) => {
	if (!categories) return {};

	const tagObject = {};

	categories.forEach((category) => {
		if (category?.name in tagObject) {
			const tags = category?.timeTags;

			tags.forEach((tag) => {
				const time = getTimeDifference(tag?.start, tag?.end);
				tag = { ...tag, time };
				tagObject[category?.name].push({
					...tag,
					timeCategory: category?.name,
				});
			});
		} else {
			tagObject[category?.name] = [];

			const tags = category?.timeTags;
			tags?.forEach((tag) => {
				const time = getTimeDifference(tag?.start, tag?.end);
				tag = { ...tag, time };
				tagObject[category?.name].push({
					...tag,
					timeCategory: category?.name,
				});
			});
		}
	});

	return tagObject;
};

const setReset = ({ dispatch, _ }, payload) => {
	console.log(`setReset...`, payload);
	return dispatch({ type: TIME_TYPES.SET_RESET, payload });
};

const setTags = ({ dispatch, getState }) => {
	const { timeCategories } = getState()?.time?.toJS().categories?.data;
	const tagObject = getTagListObjectFromCategories(timeCategories);

	console.log(`set Tags...`, tagObject);
	return dispatch({ type: TIME_TYPES.SET_TAGS, payload: tagObject });
};

export const onGetCategories = createPromiseThunk(
	TIME_TYPES.GET_CATEGORIES,
	timeApi.getCategories,
	getAccessToken,
	{ after: [setTags] },
);

export const onCreateCategory = createPromiseThunk(
	TIME_TYPES.CREATE_CATEGORY,
	timeApi.createCategory,
	getAccessToken,
	{ after: [(props) => setReset(props, 'created')] },
);

export const onUpdateCategory = createPromiseThunk(
	TIME_TYPES.UPDATE_CATEGORY,
	timeApi.updateCategory,
	getAccessToken,
	{ after: [(props) => setReset(props, 'updated')] },
);

export const onDeleteCategory = createPromiseThunk(
	TIME_TYPES.DELETE_CATEGORY,
	timeApi.deleteCategory,
	getAccessToken,
	{ after: [(props) => setReset(props, 'deleted')] },
);

export const onCreateTag = createPromiseThunk(
	TIME_TYPES.CREATE_TAG,
	timeApi.createTag,
	getAccessToken,
	{ after: [(props) => setReset(props, 'created')] },
);

export const onUpdateTag = createPromiseThunk(
	TIME_TYPES.UPDATE_TAG,
	timeApi.updateTag,
	getAccessToken,
	{ after: [(props) => setReset(props, 'updated')] },
);

export const onDeleteTag = createPromiseThunk(
	TIME_TYPES.DELETE_TAG,
	timeApi.deleteTag,
	getAccessToken,
	{ after: [(props) => setReset(props, 'deleted')] },
);

export default handleActions(
	{
		[TIME_TYPES.SET_RESET]: (state, action) => {
			const type = action.payload;
			return state.set(type, timeState.get(type));
		},
		[TIME_TYPES.GET_CATEGORIES]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'categories', loadingState);
		},
		[TIME_TYPES.GET_CATEGORIES_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'categories', doneState);
		},
		[TIME_TYPES.GET_CATEGORIES_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'categories', errorState);
		},
		[TIME_TYPES.CREATE_CATEGORY]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'created', loadingState);
		},
		[TIME_TYPES.CREATE_CATEGORY_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'created', doneState);
		},
		[TIME_TYPES.CREATE_CATEGORY_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'created', errorState);
		},
		[TIME_TYPES.UPDATE_CATEGORY]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'updated', loadingState);
		},
		[TIME_TYPES.UPDATE_CATEGORY_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'updated', doneState);
		},
		[TIME_TYPES.UPDATE_CATEGORY_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'updated', errorState);
		},
		[TIME_TYPES.DELETE_CATEGORY]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'deleted', loadingState);
		},
		[TIME_TYPES.DELETE_CATEGORY_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'deleted', doneState);
		},
		[TIME_TYPES.DELETE_CATEGORY_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'deleted', errorState);
		},
		[TIME_TYPES.SET_TAGS]: (state, action) => {
			return state
				.setIn(['tags', 'done'], true)
				.setIn(['tags', 'data'], action?.payload);
		},
		[TIME_TYPES.GET_TAGS]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'tags', loadingState);
		},
		[TIME_TYPES.GET_TAGS_DONE]: (state, action) => {
			const doneState = createPromiseState.done(action?.payload);
			return createImmutableState(state, 'tags', doneState);
		},
		[TIME_TYPES.GET_TAGS_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'tags', errorState);
		},
		[TIME_TYPES.CREATE_TAG]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'created', loadingState);
		},
		[TIME_TYPES.CREATE_TAG_DONE]: (state, action) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'created', doneState);
		},
		[TIME_TYPES.CREATE_TAG_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'created', errorState);
		},
		[TIME_TYPES.UPDATE_TAG]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'updated', loadingState);
		},
		[TIME_TYPES.UPDATE_TAG_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'updated', doneState);
		},
		[TIME_TYPES.UPDATE_TAG_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'updated', errorState);
		},
		[TIME_TYPES.DELETE_TAG]: (state, _) => {
			const loadingState = createPromiseState.loading();
			return createImmutableState(state, 'deleted', loadingState);
		},
		[TIME_TYPES.DELETE_TAG_DONE]: (state, _) => {
			const doneState = createPromiseState.done();
			return createImmutableState(state, 'deleted', doneState);
		},
		[TIME_TYPES.DELETE_TAG_ERROR]: (state, action) => {
			const errorState = createPromiseState.error(action?.payload);
			return createImmutableState(state, 'deleted', errorState);
		},
	},
	timeState,
);
