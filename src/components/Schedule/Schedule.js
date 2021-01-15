import React, { useState, useEffect, useCallback } from 'react';
import * as styled from './styled';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { ScheduleInput } from 'components';
import { handleWorkObejct } from 'utils';

export default function Schedule({
	dataSource = [],
	done,
	day = '',
	tagList = [],
}) {
	const history = useHistory();
	const queryString = history.location.search;
	const dispatch = useDispatch();

	const { created, updated } = useSelector((state) => ({
		created: state?.work?.toJS().created,
		updated: state?.work?.toJS().updated,
	}));

	const loading = created?.loading || updated?.loading;

	const [tempTable, setTempTable] = useState(dataSource);
	const [tryCreate, setTryCreate] = useState({
		try: false,
	});
	const [tryUpdate, setTryUpdate] = useState({
		try: false,
	});
	const [tryDelete, setTryDelete] = useState({
		try: false,
	});

	const { onCreateWorks, onUpdateWorks, onDeleteWorks } = bindActionCreators(
		workActions,
		dispatch,
	);

	useEffect(() => {
		if (!done) return null;

		setTempTable(dataSource);
	}, [done]);

	useEffect(() => {}, []);

	const onInputChange = useCallback(
		(day, userIndex) => (value) => {
			const id = tempTable[userIndex][day]?.[0];
			if (!value) {
				setTryDelete({
					userIndex,
					day,
					try: true,
				});
			} else if (!id) {
				setTryCreate({
					userIndex,
					day,
					value,
					try: true,
				});
			} else {
				setTryUpdate({
					userIndex,
					day,
					value,
					try: true,
				});
			}

			const newData = [...tempTable];
			newData[userIndex][day] = [id || null, value];

			setTempTable(newData);
		},
		[tempTable],
	);

	useEffect(() => {
		if (!tryDelete?.try || loading) return null;

		const { userIndex, day } = tryDelete;
		const id = tempTable[userIndex][day]?.[0];

		onDeleteWorks({ id });
		setTryDelete({
			try: false,
		});
	}, [loading, tryDelete?.try]);

	useEffect(() => {
		if (!tryCreate?.try || created?.loading) return null;

		const { userIndex, day } = tryCreate;
		const id = tempTable[userIndex][day]?.[0];

		if (id) {
			setTryCreate({
				try: false,
			});
			setTryUpdate({
				userIndex,
				day,
				try: true,
			});
		}

		const params = handleWorkObejct(
			tagList,
			queryString,
			day,
			tryCreate?.value,
			tempTable[userIndex]?.userId,
		);
		onCreateWorks({ params });
		setTryCreate({
			try: false,
		});
	}, [created?.loading, tryCreate?.try]);

	useEffect(() => {
		if (!tryUpdate?.try || updated?.loading) return null;

		const { userIndex, day } = tryUpdate;
		const id = tempTable[userIndex][day]?.[0];

		setTryUpdate({
			userIndex,
			day,
			try: true,
		});

		const params = handleWorkObejct(
			tagList,
			queryString,
			day,
			tryUpdate?.value,
			tempTable[userIndex]?.userId,
		);

		onUpdateWorks({ id, params });
		setTryUpdate({
			try: false,
		});
	}, [updated?.loading, tryUpdate?.try]);

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
