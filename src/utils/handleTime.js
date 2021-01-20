import moment from 'moment';
import { getTimestamp, getDayOfMonth } from 'utils';

export const queryToString = ({ year, month }) => {
	return `${year}-${month}`;
};

export const checkIsoWeek = (dataSource) => {};

export const getYYYYMMDD = (query) => {
	moment.locale('ko');

	const { year, month } = query;

	const yearAndMonth = queryToString(query);
	const startWeek = moment(`${yearAndMonth}-01`).isoWeek();
	const lastDay = moment(`${yearAndMonth}`)
		.endOf(`month`)
		.format('YYYY-MM-DD');
	console.log(`startWeek`, startWeek);
	console.log(`lastDay`, lastDay);

	//weekDay 로 일요일 따져서 그 날이 다음달이면 끝
};
