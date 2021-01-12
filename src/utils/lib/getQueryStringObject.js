export const getQueryStringObject = (query = '') => {
	const queryString = query.substr(1).split('&');
	const object = {};

	if (queryString === '') return {};

	for (let i = 0; i < queryString?.length; ++i) {
		let value = queryString[i].split('=', 2);

		if (value.length === 1) {
			object[value[0]] = '';
		} else {
			object[value[0]] = decodeURIComponent(value[1].replace(/\+/g, ' '));
		}
	}

	return object;
};
