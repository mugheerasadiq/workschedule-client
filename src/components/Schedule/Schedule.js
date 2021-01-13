import React, { useState, useEffect, useCallback } from 'react';
import * as styled from './styled';

import { ScheduleInput } from 'components';

export default function Schedule({
	dataSource = [],
	done,
	day = '',
	tagList = [],
}) {
	const [tempTable, setTempTable] = useState(dataSource);

	useEffect(() => {
		if (!done) return null;

		setTempTable(dataSource);
	}, [done]);

	const onInputChange = useCallback(
		(day, userIndex) => (value) => {
			const newData = [...tempTable];
			newData[userIndex][day] = value;

			setTempTable(newData);

			console.log(`tempTable`, tempTable);
		},
		[tempTable],
	);

	const dataColumn = [
		{
			key: 'name',
			dataIndex: 'name',
			title: '이름',
			align: 'center',
		},
	];

	for (let i = 1; i < day + 1; i++) {
		if (!day) return null;

		dataColumn.push({
			key: i,
			dataIndex: i,
			title: i,
			align: 'center',
			render: (value, text, index) => (
				<ScheduleInput
					day={i}
					userIndex={index}
					value={value}
					tagList={tagList}
					onInputChange={onInputChange}
					tempTable={tempTable}
				/>
			),
		});
	}

	return <styled.ScheduleTable columns={dataColumn} dataSource={tempTable} />;
}
