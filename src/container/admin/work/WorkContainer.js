import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'antd';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';
import * as userActions from 'stores/user';

import { DatePicker, Schedule } from 'components';
import { getQueryStringObject, getDayOfMonth, getDayOfDate } from 'utils';

export default function AdminWorkContainer() {
	const history = useHistory();
	const query = getQueryStringObject(history.location.search);
	const day = getDayOfMonth(query?.year, query?.month);

	const dataSource = [];
	const daySource = {};

	const [tempTable, setTempTable] = useState(dataSource);

	const { works, tags, users } = useSelector((state) => ({
		works: state?.work?.toJS().works,
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
	}));

	const workList = works?.data;
	const userList = users?.data;
	const done = works?.done;

	for (let i = 1; i < day + 1; i++) {
		daySource[i] = null;
	}

	for (let i = 0; i < userList?.length; i++) {
		dataSource.push({
			key: userList[i].id,
			name: userList[i]?.name,
			userId: userList[i]?.id,
			...daySource,
		});
	}

	useEffect(() => {
		if (!done) return null;

		workList?.forEach((work) => {
			const day = getDayOfDate(work.start);
			const userName = work?.user?.name;
			const tagName = work?.tag?.name;

			dataSource?.forEach((data, index) => {
				if (data?.name === userName) {
					dataSource[index][day] = tagName;
				}
			});
		});
	}, [done]);

	return (
		<>
			<DatePicker />
			<Schedule dataSource={dataSource} done={done} day={day} />
		</>
	);
}
