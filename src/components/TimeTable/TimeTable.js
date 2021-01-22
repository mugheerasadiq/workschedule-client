import React, { useEffect } from 'react';
import * as styled from './styled';

import { getIsoDate, getIsoWeeks, getWeekTime } from 'utils';

const column = [
	{
		key: 'name',
		dataIndex: 'name',
		title: '이름',
		align: 'center',
	},
];

export default function TimeTable({
	dataSource = [],
	beforeSource = [],
	afterSource = [],
	query,
	done,
	beforeDay,
}) {
	const dataColumn = [...column];

	const {
		startDate,
		lastDate,
		startWeek,
		lastWeek,
		date,
		lastDay,
	} = getIsoDate(query);
	const weeks = getIsoWeeks(startWeek, lastWeek);

	for (let i = 0; i < weeks?.length; i++) {
		dataColumn.push({
			key: `${weeks[i]}`,
			dataIndex: `${weeks[i]}`,
			title: `${weeks[i]}번째 주`,
			align: 'center',
		});
	}

	return (
		<styled.TimeTableWrapper>
			<styled.TimeTable
				columns={dataColumn}
				dataSource={dataSource}
				pagination={false}
				scroll={{ y: 300 }}
			/>
		</styled.TimeTableWrapper>
	);
}
