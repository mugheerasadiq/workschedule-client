export const getAccessToken = (getState) => {
	const accessToken = getState()?.user?.toJS()?.logined?.accessToken;
	return { accessToken };
};

// pagination using queryString

export const getDataLimitAndOffset = (getState, reducer, key) => {
	const { limit, offset } = getState()[reducer].toJS()[key];
	return { limit, offset };
};
