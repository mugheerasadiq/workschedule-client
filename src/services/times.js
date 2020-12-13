import Request from './request';

export const getCategories = async () => {
	const url = '/times/categories';
	const response = await Request.onRequestGet({ url });

	return response;
};

export const createCategory = async ({ index = null, name }) => {
	const url = '/times/categories';
	const params = { index, name };
	const response = await Request.onRequestPost({ url, params });

	return response;
};

export const getTags = async () => {
	const url = '/times/tag';
	const response = await Request.onRequestGet({ url });

	return response;
};

export const createTag = async ({ name, start, end }) => {
	const url = '/times/tag';
	const params = { name, start, end };
	const response = await Request.onRequestPost({ url, params });

	return response;
};
