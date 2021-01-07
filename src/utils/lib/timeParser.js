import moment from 'moment';
import { getTimestamp, parseAndReturnTimeStamp } from './getTimeStamps';

export const onFilterRangeTime = (hour, minute) => {
	const intHour = parseInt(hour, 10) || 0;
	const intMinute = parseInt(minute, 10) || 0;

	let stringHour = null;
	let stringMinute = null;
	if (intHour >= 0 && intHour <= 24)
		stringHour = intHour > 9 ? hour : `0${hour}`;
	if (intMinute >= 0 && intMinute <= 60)
		stringMinute = intMinute > 9 ? minute : `0${minute}`;

	return {
		hour: stringHour || '00',
		minute: stringMinute || '00',
	};
};

export const getTimeFromTags = (hour, minute) => {
	const parsedTime = onFilterRangeTime(hour, minute);

	const time = moment(
		`2021-01-01 ${parsedTime.hour}:${parsedTime.minute}:00`,
		'YYYY-MM-DD hh:mm:ss',
		'kr',
	);

	return time.toString();
};

export const combineDateAndTags = (date, time) => {
	const { year, month, day } = getTimestamp(date);
	const { hours, minutes } = parseAndReturnTimeStamp(time);

	const parsedTime = moment(
		`${year}-${month}-${day} ${hours}:${minutes}:00`,
		`YYYY-MM-DD hh:mm:ss`,
		'kr',
	);

	return parsedTime.toString();
};

export const getTimePickerDate = (date) => {
	const { year, month } = getTimestamp(date);

	return { year, month };
};
