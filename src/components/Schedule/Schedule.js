import React, { useState, useEffect, useCallback } from 'react';
import * as styled from './styled';

import { useSelector } from 'react-redux';

export default function Schedule({ dataSource = [], done, day = '' }) {
	const [tempTable, setTempTable] = useState(dataSource);

	useEffect(() => {
		if (!done) return null;

		setTempTable(dataSource);
	}, [done]);

	const onInputChange = useCallback(
		(day, userIndex) => (e) => {
			const newData = [...tempTable];
			newData[userIndex][day] = e.target.value;

			setTempTable(newData);
		},
		[tempTable],
	);

	const works = useSelector((state) => state?.work?.toJS().works);

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
				<styled.ScheduleInput
					name={i}
					value={value}
					onChange={onInputChange(i, index)}
				/>
			),
		});
	}

	return <styled.ScheduleTable columns={dataColumn} dataSource={tempTable} />;
}
