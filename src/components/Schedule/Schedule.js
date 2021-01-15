import React, { useState, useEffect, useCallback } from 'react';
import * as styled from './styled';

import { useHistory, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { ScheduleInput } from 'components';
import { handleWorkObejct } from 'utils';

// 상위로 올리셈. 상수인데 re-rendering 될 필요 없잖아
const dataColumn = [
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
	const history = useHistory();
	const location = useLocation();
	const queryString = location.search;

	// const queryString = history.location.search; => useLocation 쓸것
	const dispatch = useDispatch();

	const work = useSelector((state) => state.work?.toJS());
	const { created, updated } = work;
	const loading = created?.loading || updated?.loading;

	const [tempTable, setTempTable] = useState(dataSource);

	// 이게 뭘 뜻하는건데? 이거를 굳이 쓸 이유가 없다고 판단되는데
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

	const onTryCreate = useCallback(() => {}, [tempTable]);

	const onTryDelete = useCallback(() => {}, [tempTable]);

	const onTryUpdate = useCallback(() => {}, [tempTable]);

	const onInputChange = useCallback(
		(day, userIndex) => (value) => {
			const id = tempTable[userIndex][day]?.[0];
			if (!value) {
				setTryDelete({
					userIndex,
					day,
					try: true,
				});

				// 바로 onTryDelete -> useEffect를 굳이 안거칠 필요가 있다고 보는데
				// 너무 useEffect랑 useState에 의존하는 경향이 있음.
			} else if (!id) {
				setTryCreate({
					userIndex,
					day,
					value,
					try: true,
				});
				// 바로 onTryCreate
			} else {
				setTryUpdate({
					userIndex,
					day,
					value,
					try: true,
				});

				// onTryUpdate
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
