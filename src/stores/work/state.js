import { Map } from 'immutable';
import { initialState } from '../state';

export const workState = Map({
	work: initialState.object,
	works: initialState.object,
	created: initialState.object,
	updated: initialState.object,
	deleted: initialState.object,
});
