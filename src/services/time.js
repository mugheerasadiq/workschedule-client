import Request from './request';

export const getCategories = async ({ accessToken }) => {
	const url = '/times/categories';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestGet({ url, headers });

	return response;
};

export const createCategory = async ({ name, accessToken }) => {
	const url = '/times/categories';
	const params = { name };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPost({
		url,
		params,
		headers,
	});

	return response;
};

export const updateCategory = async ({ id, name, accessToken }) => {
	const url = `/times/categories/${id}`;
	const params = { name };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPatch({
		url,
		params,
		headers,
	});

	return response;
};

export const deleteCategory = async ({ id, accessToken }) => {
	const url = `/times/categories/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};

export const createTag = async ({ params, accessToken }) => {
	const url = '/times/tags';
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPost({ url, params, headers });

	return response;
};

export const updateTag = async ({ id, name, start, end, accessToken }) => {
	const url = `/times/tags/${id}`;
	const params = { name, start, end };
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestPatch({ url, params, headers });

	return response;
};

export const deleteTag = async ({ id, accessToken }) => {
	const url = `/times/tags/${id}`;
	const headers = Request.getAuthorizationHeader(accessToken);
	const response = await Request.onRequestDelete({ url, headers });

	return response;
};
