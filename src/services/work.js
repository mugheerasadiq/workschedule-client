import Request from './request';

export const getWorks = async ({ accessToken, query }) => {
	const url = '/works';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, query, headers });

	return response;
};

export const createWorks = async ({ accessToken, params }) => {
	const url = '/works';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPost({ url, params, headers });

	return response;
};

export const updateWorks = async ({ accessToken }) => {
	const url = '/works';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPatch({ url, headers });

	return response;
};

export const deleteWorks = async ({ accessToken }) => {
	const url = '/works';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};
