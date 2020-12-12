import { Map } from 'immutable';

export const createPromiseState = {
	loading: () =>
		Map({
			loading: true,
			done: false,
			error: null,
		}),
	done: (data) =>
		Map({
			loading: false,
			done: true,
			error: null,
			data,
		}),
	error: (error) =>
		Map({
			loading: false,
			done: false,
			error,
		}),
};
