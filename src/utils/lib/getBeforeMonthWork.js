import { getLastDay } from 'utils';

export const getBeforeMonthWork = (query) => {
	const beforeLastDay = getLastDay(query);
	const lastDay = beforeLastDay.getDate();

	const year = beforeLastDay.getFullYear();
	const month = beforeLastDay.getMonth() + 1;

	const beforeMonthQuery = { year, month };

	return { beforeMonthQuery, lastDay };
};
