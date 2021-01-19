import React, { useCallback, useEffect, useMemo } from 'react';
import * as styled from './styled';

import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { DatePicker, Schedule, TimeTable } from 'components';
import {
	getQueryStringObject,
	getDayOfMonth,
	getDayOfDate,
	renderTagList,
	getBeforeMonthQuery,
} from 'utils';

export default function AdminWorkContainer() {
	const location = useLocation();
	const queryString = location.search;
	const query = useMemo(() => getQueryStringObject(queryString), [
		queryString,
	]);
	const day = useMemo(() => getDayOfMonth(query), [queryString]);
	const beforeDay = getDayOfMonth(getBeforeMonthQuery(query));

	const { work, tags, users } = useSelector((state) => ({
		work: state?.work?.toJS(),
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
	}));

	const { works, before, after } = work;

	const workList = works?.data;
	const beforeList = before?.data;
	const afterList = after?.data;

	const userList = users?.data;
	const done = works?.done;

	const tagList = renderTagList(tags);

	const onPushDaySource = (start, end) => {
		const source = {};
		for (let i = start; i < end + 1; i++) {
			source[i] = null;
		}
		return source;
	};

	const beforeDaySource = useMemo(
		() => onPushDaySource(beforeDay - 6, beforeDay),
		[queryString],
	);
	const daySource = onPushDaySource(1, day);
	const afterDaySource = useMemo(() => onPushDaySource(1, 6), [userList]);

	const onPushDataSource = (daySource) => {
		const data = [];
		for (let i = 0; i < userList?.length; i++) {
			data.push({
				key: userList[i].id,
				name: userList[i]?.name,
				userId: userList[i]?.id,
				...daySource,
			});
		}
		return data;
	};
	const dataSource = onPushDataSource(daySource);
	const beforeSource = onPushDataSource(beforeDaySource);
	const afterSource = onPushDataSource(afterDaySource);

	const onSetDataSource = useCallback(
		(workList, dataSource) => {
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
						if (!(day in dataSource[index])) return null;
						dataSource[index][day] = [id, tagName, time];
					}
				});
			});
		},
		[dataSource],
	);

	useEffect(() => {
		if (!done) return null;

		onSetDataSource(workList, dataSource);
	}, [done]);

	onSetDataSource(beforeList, beforeSource);
	onSetDataSource(afterList, afterSource);

	return (
		<styled.WorkContainer>
			<DatePicker />
			<Schedule
				dataSource={dataSource}
				beforeSource={beforeSource}
				afterSource={afterSource}
				done={done}
				beforeDay={beforeDay}
				day={day}
				tagList={tagList}
			/>
			{/* <TimeTable
				dataSource={dataSource}
				beforeSource={beforeSource}
				afterSource={afterSource}
				query={query}
				done={done}
			/> */}
		</styled.WorkContainer>
	);
}
