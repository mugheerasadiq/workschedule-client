import React, { useRef } from 'react';

import moment from 'moment';

import { combineDateAndTags, getQueryStringObject } from 'utils';

import ToastCalendar from '@toast-ui/react-calendar';

import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const daynames = [
	'일요일',
	'월요일',
	'화요일',
	'수요일',
	'목요일',
	'금요일',
	'토요일',
];

const calendarOptions = {
	height: '80vh',
	disableDblClick: true,
	disableClick: false,
	isReadOnly: true,
	month: {
		startDayOfWeek: 0,
		daynames,
	},
	scheduleView: true,
	taskView: true,
	timezones: [
		{
			timezoneOffset: 540,
			displayLabel: 'GMT+09:00',
			tooltip: 'Seoul',
		},
	],
	useDetailPopup: true,
	useCreationPopup: true,
	view: 'month',
	week: {
		showTimezoneCollapseButton: true,
		timezonesCollapsed: true,
	},
};

export default function Calendar({ tags = [], works = [], calendarRef }) {
	const schedules = works?.map((work) => {
		const tag = work?.tag;
		const user = work?.user;

		const start = combineDateAndTags(work?.start, tag?.start);
		const end = combineDateAndTags(work?.end, tag?.end);

		return {
			id: work?.id,
			title: `${tag?.name}`,
			body: `${user?.name}`,
			isVisible: true,
			category: 'time',
			calendarId: tag?.id,
			start,
			end,
		};
	});

	return (
		<>
			<ToastCalendar
				calendars={tags}
				schedules={schedules}
				ref={calendarRef}
				{...calendarOptions}
			/>
		</>
	);
}
