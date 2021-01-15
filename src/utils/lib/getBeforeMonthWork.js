export const getBeforeMonthWork = (query) => {
	const beforeLastDay = getLastDay(query);
	const lastDay = beforeLastDay.getDate();

	const year = beforeLastDay.getFullYear();
	const month = beforeLastDay.getMonth() + 1;

	const beforeMonthQuery = { year, month };

	return { beforeMonthQuery, lastDay };
};

export const getLastDay = (query) => {
	const nowFirstDay = new Date(`${query?.year}-${query?.month}-01`);
	nowFirstDay.setDate(nowFirstDay.getDate() - 1);

	return nowFirstDay;
};

export const getBeforeLastDayWork = (work, day) => {
	console.log(`work, day`, work, day);

	return null;
};
