const getParams = (args, getState, dispatch) => {
	let param = {};
	if (!Array.isArray(args)) return param;

	args.forEach((arg) => {
		if (typeof arg === 'function') {
			param = {
				...param,
				...arg(getState, dispatch),
			};
		}
	});
	return param;
};

const getLastAction = (args, type = 'after') => {
	if (!Array.isArray(args)) return null;
	if (args?.length <= 0) return null;

	return args[args.length - 1][type] || null;
};

const onLastAfterAction = (args, { dispatch, data, getState }) => {
	const afterAction = getLastAction(args);
	if (!afterAction || !Array.isArray(afterAction)) return null;

	afterAction.forEach((after) => {
		if (typeof after === 'function') {
			after({ dispatch, data, getState });
		}
	});
};

export const createPromiseThunk = (type, promise, ...args) => {
	const [TYPE_DONE, TYPE_ERROR] = [`${type}_DONE`, `${type}_ERROR`];

	return (data) => async (dispatch, getState) => {
		const param = { ...data, ...getParams(args, getState, dispatch) };
		dispatch({ type });

		try {
			const { status, data } = await promise(param);
			if (status >= 200 && status < 300) {
				dispatch({ type: TYPE_DONE, payload: data });
				onLastAfterAction(args, { dispatch, data, getState });
			} else {
				dispatch({ type: TYPE_ERROR, payload: { status, data } });
			}
		} catch (error) {
			dispatch({ type: TYPE_ERROR, payload: error });
		}
	};
};
