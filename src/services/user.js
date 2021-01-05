import Request from './request';

export const getUsers = async ({ accessToken }) => {
	const url = '/users';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const getUser = async ({ id, accessToken }) => {
	const url = `/users/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const updateUser = async ({ id, accessToken, status }) => {
	const url = `/users/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const params = { status };

	console.log(id, status);

	const response = await Request.onRequestPatch({ url, params, headers });

	return response;
};

export const deleteUser = async ({ id, accessToken }) => {
	const url = `/users/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};
