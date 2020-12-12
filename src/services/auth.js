import Request from './request';

//DB 체킹 필요

export const login = async ({ companyNumber, password }) => {
	const url = 'localhost:8080';
	const params = { companyNumber, password };

	try {
		await checkStatus(url, params);
	} catch (e) {
		console.log(e);
	}
};

export const checkStatus = async (url, params) => {
	const { data } = await Request.onRequestPost({ url, params });
	const status = data?.status;

	if (status === 'Approved') {
		const response = await Request.onRequestPost({ url, params });

		return response;
	} else if (status === 'Wait') {
		return {
			status: 403,
			data: null,
		};
	} else if (status === 'Rejected') {
		return {
			status: 404,
			data: null,
		};
	} else {
		return {
			status: 500,
			data: null,
		};
	}
};

export const register = async ({ name, companyNumber, password }) => {
	const url = 'localhost:8080';
	const params = { name, companyNumber, password };
	const response = await Request.onRequestPost({ url, params });

	return response;
};
