import { Map } from 'immutable';
import { initialState } from '../state';

export const timesState = Map({
	categories: initialState.list,
	tags: initialState.list,
	created: initialState.object,
	updated: initialState.object,
	deleted: initialState.object,
});
