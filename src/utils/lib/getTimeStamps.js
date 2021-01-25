import moment from 'moment';

export const getTimestamp = (timestamp) => {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = `0${date.getMonth() + 1}`.slice(-2);
	const day = `0${date.getDate()}`.slice(-2);
	const hours = date.getHours();
	const minutes = date.getMinutes();

	return { year, month, day, hours, minutes };
};

export const parseTimestamp = (timestamp) => {
	const { hours, minutes } = getTimestamp(timestamp);
	return `${hours}시 ${minutes}분`;
};

export const parseAndReturnTimeStamp = (timestamp) => {
	const { hours, minutes } = getTimestamp(timestamp);
	return { hours, minutes };
};

export const getBeforeMonthQuery = ({ year, month }) => {
	const beforeYear = moment(`${year}-${month}`).subtract(1, 'months').year();
	const beforeMonth =
		moment(`${year}-${month}`).subtract(1, 'months').month() + 1;

	return { year: beforeYear, month: beforeMonth };
};

export const getAfterMonthQuery = ({ year, month }) => {
	const afterYear = moment(`${year}-${month}`).add(1, 'months').year();
	const afterMonth = moment(`${year}-${month}`).add(1, 'months').month() + 1;

	return { year: afterYear, month: afterMonth };
};

export const getDayOfMonth = ({ year, month }) => {
	return new Date(year, month, 0).getDate();
};

export const getDayOfDate = (timestamp) => {
	const date = new Date(timestamp);
	const day = date.getDate();

	return day;
};

export const getLastDay = (query) => {
	const nowFirstDay = new Date(`${query?.year}-${query?.month}-01`);
	nowFirstDay.setDate(nowFirstDay.getDate() - 1);

	return nowFirstDay;
};
