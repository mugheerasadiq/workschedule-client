import React from 'react';
import { combineDateAndTags } from 'utils';

import ToastCalendar from '@toast-ui/react-calendar';

import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

export default function Calendar({ tags = [], works = [] }) {
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

	console.log(`tags`, tags);
	return (
		<ToastCalendar
			calendars={tags}
			schedules={schedules}
			height="80vh"
			disableDblClick={true}
			disableClick={false}
			isReadOnly={true}
			month={{
				startDayOfWeek: 0,
			}}
			scheduleView
			taskView
			timezones={[
				{
					timezoneOffset: 540,
					displayLabel: 'GMT+09:00',
					tooltip: 'Seoul',
				},
			]}
			useDetailPopup
			useCreationPopup
			view={'month'}
			week={{
				showTimezoneCollapseButton: true,
				timezonesCollapsed: true,
			}}
		/>
	);
}
