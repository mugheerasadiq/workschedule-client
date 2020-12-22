import { Map } from 'immutable';
import { initialState } from '../state';

export const timeState = Map({
	categories: initialState.object,
	tags: initialState.object,
	created: initialState.object,
	updated: initialState.object,
	deleted: initialState.object,
});
