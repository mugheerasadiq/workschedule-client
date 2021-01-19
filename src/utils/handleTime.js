// import moment from 'moment';
// import { getTimestamp, getDayOfMonth } from 'utils';

// export const queryToString = ({ year, month }) => {
// 	return `${year}-${month}`;
// };

// export const checkIsoWeek = (dataSource) => {};

// export const getYYYYMMDD = (string) => {
// 	const date = moment(`${string}-01`, `YYYY-MM-DD`, 'kr');
// 	const lastDate = moment(`${string}-28`, `YYYY-MM-DD`, 'kr');
// 	const lastDay = getDayOfMonth(string);
// 	console.log(`마지막 날 `, lastDay);
// 	console.log(`날짜`, date.toString());
// 	console.log(`weekstartDay`, date.startOf('isoWeek').toString());
// 	console.log(`weekEndDay`, lastDate.endOf('isoWeek').toString());
// 	console.log(`week Number`, date.isoWeek());
// 	console.log(`week Number`, lastDate.isoWeek());
// 	console.log(getTimestamp(date.toString()));
// };
