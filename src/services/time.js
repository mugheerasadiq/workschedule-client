import Request from './request';

export const getCategories = async ({ accessToken }) => {
	const url = '/times/categories';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const createCategory = async ({ index = null, name, accessToken }) => {
	const url = '/times/categories';
	const params = { index, name };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPost({ url, params, headers });

	return response;
};

export const updateCategory = async ({ index = null, name, accessToken }) => {
	const url = '/times/categories';
	const params = { index, name };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPatch({ url, params, headers });

	return response;
};

export const deleteCategory = async ({ id, accessToken }) => {
	const url = '/times/categories';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};

export const getTags = async ({ accessToken }) => {
	const url = '/times/tag';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const createTag = async ({ name, start, end, accessToken }) => {
	const url = '/times/tag';
	const params = { name, start, end };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPost({ url, params, headers });

	return response;
};

export const updateTag = async ({ name, start, end, accessToken }) => {
	const url = '/times/tag';
	const params = { name, start, end };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPatch({ url, params, headers });

	return response;
};

export const deleteTag = async ({ id, accessToken }) => {
	const url = '/times/tag';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};
