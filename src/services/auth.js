import Request from './request';

export const login = async ({ id, password }) => {
	const url = '/auth/login';
	const params = { id, password };
	const response = await Request.onRequestPost({ url, params });

	return response;
};

export const register = async ({ companyId, name, password }) => {
	const url = '/auth/register';
	const params = { companyId, name, password };
	const response = await Request.onRequestPost({ url, params });

	return response;
};
