import { timeState } from 'stores/time/state';

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

export const getDayOfMonth = (year, month) => {
	return new Date(year, month, 0).getDate();
};

export const getDayOfDate = (timestamp) => {
	const date = new Date(timestamp);
	const day = date.getDate();

	return day;
};
