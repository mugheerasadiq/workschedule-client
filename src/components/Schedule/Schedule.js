import React, { useState, useEffect, useCallback } from 'react';
import * as styled from './styled';

import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { ScheduleInput } from 'components';
import { handleWorkObejct } from 'utils';

const column = [
	{
		key: 'name',
		dataIndex: 'name',
		title: '이름',
		align: 'center',
	},
];

export default function Schedule({
	dataSource = [],
	done,
	day = '',
	tagList = [],
}) {
	const location = useLocation();
	const dispatch = useDispatch();
	const queryString = location.search;

	const work = useSelector((state) => state?.work?.toJS());
	const { created, updated } = work;

	const loading = created?.loading || updated?.loading;

	const [tempTable, setTempTable] = useState(dataSource);

	const dataColumn = [...column];

	const { onCreateWorks, onUpdateWorks, onDeleteWorks } = bindActionCreators(
		workActions,
		dispatch,
	);

	useEffect(() => {
		if (!done) return null;

		setTempTable(dataSource);
	}, [done]);

	const onTryCreate = useCallback(
		(userIndex, day, value) => {
			if (created?.loading) return null;

			const params = handleWorkObejct(
				tagList,
				queryString,
				day,
				value,
				tempTable[userIndex]?.userId,
			);
			onCreateWorks({ params });
		},
		[tempTable],
	);

	const onTryUpdate = useCallback(
		(userIndex, day, value) => {
			if (updated?.loading) return null;

			const id = tempTable[userIndex][day]?.[0];
			const params = handleWorkObejct(
				tagList,
				queryString,
				day,
				value,
				tempTable[userIndex]?.userId,
			);
			onUpdateWorks({ id, params });
			console.log(`update...`, tempTable);
		},
		[tempTable],
	);

	const onTryDelete = useCallback(
		(userIndex, day) => {
			if (loading) return null;

			const id = tempTable[userIndex][day]?.[0];
			onDeleteWorks({ id });
		},
		[tempTable],
	);

	const onInputChange = useCallback(
		(day, userIndex, value) => {
			const id = tempTable[userIndex][day]?.[0];
			if (!value) {
				onTryDelete(userIndex, day);
			} else if (!id) {
				onTryCreate(userIndex, day, value);
			} else {
				onTryUpdate(userIndex, day, value);
			}

			const newData = [...tempTable];
			newData[userIndex][day] = [id || null, value];

			setTempTable(newData);
		},
		[tempTable],
	);

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
