import React, { useState, useCallback, useEffect, useMemo } from 'react';
import * as styled from './styled';

import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { DatePicker, Schedule, TimeTable, TagTable } from 'components';
import {
	getQueryStringObject,
	getDayOfMonth,
	getDayOfDate,
	renderTagList,
	getBeforeMonthQuery,
	getAfterMonthQuery,
	getIsoDate,
	getIsoWeek,
	getIsoWeeks,
	getSundayTime,
} from 'utils';

const column = [
	{
		key: 'name',
		dataIndex: 'name',
		title: '이름',
		align: 'center',
	},
];

const timeColumn = (weeks, i) => ({
	key: `${weeks[i]}`,
	dataIndex: `${weeks[i]}`,
	title: `${weeks[i]}번째 주`,
	align: 'center',
});

export default function AdminWorkContainer() {
	const location = useLocation();
	const queryString = location.search;
	const query = useMemo(() => getQueryStringObject(queryString), [
		queryString,
	]);
	const day = useMemo(() => getDayOfMonth(query), [queryString]);
	const beforeMonthQuery = getBeforeMonthQuery(query);
	const afterMonthQuery = getAfterMonthQuery(query);
	const beforeDay = getDayOfMonth(beforeMonthQuery);

	const dataColumn = [...column];

	const [tempTimeSource, setTempTimeSource] = useState([]);

	const { work, tags, users } = useSelector((state) => ({
		work: state?.work?.toJS(),
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
	}));

	const { works, before, after } = work;

	const workList = works?.data;
	const beforeList = before?.data;
	const afterList = after?.data;

	const userList = users?.data.filter((user) => {
		return user?.status === 'confirm';
	});
	const done = works?.done;

	const tagList = renderTagList(tags);

	const { startWeek, lastWeek } = getIsoDate(query);
	const weeks = getIsoWeeks(startWeek, lastWeek);

	const onPushDaySource = (start, end) => {
		const source = {};
		for (let i = start; i < end + 1; i++) {
			source[i] = null;
		}
		return source;
	};

	const beforeDaySource = useMemo(
		() => onPushDaySource(beforeDay - 5, beforeDay),
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

	onSetDataSource(beforeList, beforeSource);
	onSetDataSource(afterList, afterSource);

	const onSetTimeColumnAndSource = useCallback(() => {
		let timeKeyObejct = {};
		const timeSource = [];
		for (let i = 0; i < weeks?.length; i++) {
			dataColumn.push(timeColumn(weeks, i));
		}

		const timeKeys = dataColumn.slice(1).map((data) => {
			const dataIndex = data?.dataIndex;
			return { [dataIndex]: 0 };
		});

		for (const [key, value] of Object.entries(timeKeys)) {
			timeKeyObejct = { ...timeKeyObejct, ...value };
		}

		userList?.forEach((user) => {
			timeSource.push({
				name: user?.name,
				...timeKeyObejct,
			});
		});
		return timeSource;
	}, [dataSource, query]);

	const timeSource = onSetTimeColumnAndSource();

	const setTimeSource = useCallback(
		(dataSource, query) => {
			dataSource?.forEach((data, userIndex) => {
				for (const [key, value] of Object.entries(data)) {
					const isoWeek = getIsoWeek(query, key);

					if (isoWeek && value?.[2]) {
						timeSource[userIndex][isoWeek] += value?.[2] || 0;
					}
				}
			});
		},
		[dataSource, timeSource, query],
	);

	useEffect(() => {
		if (!done) return null;

		onSetDataSource(workList, dataSource);
		setTimeSource(beforeSource, beforeMonthQuery);
		setTimeSource(dataSource, query);
		setTimeSource(afterSource, afterMonthQuery);
		setTempTimeSource(timeSource);
	}, [done, before?.done, after?.done, query]);

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
			<styled.TableWrapper>
				<TimeTable
					dataColumn={dataColumn}
					timeSource={tempTimeSource}
				/>
				<TagTable tagList={tagList} />
			</styled.TableWrapper>
		</styled.WorkContainer>
	);
}
