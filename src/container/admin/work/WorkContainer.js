import React, { useCallback, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { DatePicker, Schedule } from 'components';
import {
	getQueryStringObject,
	getDayOfMonth,
	getDayOfDate,
	renderTagList,
} from 'utils';

export default function AdminWorkContainer() {
	const history = useHistory();
	const query = getQueryStringObject(history.location.search);
	const day = getDayOfMonth(query?.year, query?.month);

	const { works, tags, users } = useSelector((state) => ({
		works: state?.work?.toJS().works,
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
	}));

	const workList = works?.data;
	const userList = users?.data;
	const done = works?.done;

	const tagList = renderTagList(tags);

	const dataSource = [];
	const daySource = {};

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

	const onSetDataSource = () => {
		workList?.forEach((work) => {
			const day = getDayOfDate(work.start);
			const userName = work?.user?.name;
			const tagName = work?.tag?.name;
			const id = work?.id;

			const tag = tagList.filter((tag) => {
				return tag?.name === tagName;
			});
			const time = tag[0]?.time;

			dataSource?.forEach((data, index) => {
				if (data?.name === userName) {
					dataSource[index][day] = [id, tagName, time];
				}
			});
		});
	};

	useEffect(() => {
		if (!done) return null;

		onSetDataSource();
	}, [done]);

	return (
		<>
			<DatePicker />
			<Schedule
				dataSource={dataSource}
				done={done}
				day={day}
				tagList={tagList}
			/>
		</>
	);
}
