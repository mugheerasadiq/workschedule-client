import moment from 'moment';
import { getQueryStringObject, getTimestamp } from 'utils';

export const handleWorkObejct = (tagList, queryString, day, value, id) => {
	const tag = tagList?.filter((tag) => {
		return tag.name === value;
	});

	const startTime = tag[0]?.start;
	const endTime = tag[0]?.end;

	const yearAndMonthObejct = getQueryStringObject(queryString);
	const { year, month } = yearAndMonthObejct;

	const { start, end } = checkStartAndEndDate(
		year,
		month,
		day,
		startTime,
		endTime,
	);

	const object = {
		user: id,
		timeTag: tag[0]?.id,
		date: start,
		start,
		end,
	};

	return object;
};

export const checkStartAndEndDate = (year, month, day, startTime, endTime) => {
	let startDate = new Date(`${year}-${month}-${day} ${startTime}`);
	let endDate = new Date(`${year}-${month}-${day} ${endTime}`);

	if (endDate.getHours() - startDate.getHours() <= 0) {
		endDate.setDate(endDate.getDate() + 1);
	}

	const startDateObject = getTimestamp(startDate);
	const endDateObject = getTimestamp(endDate);

	const startDay = startDateObject.day;
	const endDay = endDateObject.day;

	moment.locale('ko');

	const start = moment(`${year}-${month}-${startDay}`).format(`YYYY-MM-DD`);
	const end = moment(`${year}-${month}-${endDay}`).format(`YYYY-MM-DD`);

	return { start, end };
};
