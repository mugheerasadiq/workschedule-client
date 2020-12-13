import Request from './request';

//DB 체킹 필요

export const login = async ({ id, password }) => {
	const url = '/auth/login';
	const params = { id, password };
	const response = await Request.onRequestPost({ url, params });

	return response;
};

export const register = async ({ name, email, password }) => {
	const url = '/auth/register';
	const params = { name, email, password };
	const response = await Request.onRequestPost({ url, params });

	return response;
};
