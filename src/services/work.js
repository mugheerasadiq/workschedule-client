import Request from './request';

export const getWork = async ({ id, accessToken }) => {
	const url = `/works/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const getWorks = async ({ accessToken }) => {
	const url = '/works';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const createWorks = async ({ accessToken, params }) => {
	const url = '/works';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPost({ url, params, headers });

	return response;
};

export const updateWorks = async ({ id, accessToken }) => {
	const url = `/works/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPatch({ url, headers });

	return response;
};

export const deleteWorks = async ({ id, accessToken }) => {
	const url = `/works/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};
