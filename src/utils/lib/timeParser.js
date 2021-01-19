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

export const timeToHHMM = (timeStamp) => {
	const { hours, minutes } = getTimestamp(timeStamp);
	const parsedHour = makeTimeFormat(hours);
	const parsedMinute = makeTimeFormat(minutes);
	return `${parsedHour}:${parsedMinute}`;
};

export const makeTimeFormat = (time) => {
	const intTime = parseInt(time, 10) || 0;
	let parsedTime = null;
	if (intTime >= 0 && intTime < 10) {
		parsedTime = `0${intTime}`;
	} else parsedTime = intTime;

	return parsedTime;
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

export const getTimeDifference = (start, end) => {
	const startDate = new Date(start);
	const endDate = new Date(end);

	const startHour = startDate.getHours();
	const startMinutes = startDate.getMinutes();
	const endHour = endDate.getHours();
	const endMinutes = endDate.getMinutes();

	let time = endHour + endMinutes / 60 - (startHour + startMinutes / 60);

	if (time < 0) {
		time = 24 + time;
	}

	return time;
};
