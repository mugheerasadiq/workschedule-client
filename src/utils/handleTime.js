import moment from 'moment';

export const queryToString = ({ year, month }) => {
	return `${year}-${month}`;
};

export const getIsoDate = (query) => {
	moment.locale('ko');

	const yearAndMonth = queryToString(query);
	const date = moment(`${yearAndMonth}`).format('YYYY-MM');
	const startDate = moment(`${yearAndMonth}-01`);
	const lastDate = moment(`${yearAndMonth}`)
		.endOf(`month`)
		.format('YYYY-MM-DD');
	const startWeek = moment(startDate).isoWeek();
	const lastWeek = moment(lastDate).isoWeek();
	const startDay = moment(startDate).get('date');
	const lastDay = moment(lastDate).get('date');

	return {
		startDate,
		lastDate,
		startWeek,
		lastWeek,
		startDay,
		lastDay,
		date,
	};
};

export const getIsoWeeks = (startWeek, lastWeek) => {
	const weeks = [];

	if (startWeek > lastWeek) {
		weeks[0] = startWeek;
		for (let i = 1; i < lastWeek + 1; i++) {
			weeks.push(i);
		}
	} else {
		for (let i = startWeek; i < lastWeek + 1; i++) {
			weeks.push(i);
		}
	}
	return weeks;
};

export const getWeekTime = (
	beforeDay,
	weeks,
	startDate,
	lastDate,
	date,
	lastDay,
	dataSource,
) => {};
