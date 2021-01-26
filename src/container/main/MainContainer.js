import React, { useEffect, useRef, useCallback } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { useLocation } from 'react-router-dom';

import * as timeActions from 'stores/time';

import { DatePicker, Calendar } from 'components';
import { getMomentDate, getQueryStringObject } from 'utils';
import { theme } from 'ui';

export default function MainContainer() {
	const dispatch = useDispatch();
	const location = useLocation();
	const queryString = location?.search;
	const calendarRef = useRef();
	const dateObject = getQueryStringObject(queryString);
	const { onGetCategories } = bindActionCreators(timeActions, dispatch);

	const { times, works } = useSelector((state) => ({
		times: state?.time?.toJS().tags,
		works: state?.work?.toJS().works,
	}));

	useEffect(() => {
		onGetCategories();
	}, []);

	const tags = [];

	for (let category in times?.data) {
		tags.push(...times?.data[category]);
	}
	const tagList = tags.map((tag, index) => {
		return {
			id: tag?.id,
			name: tag?.name,
			bgColor: theme[index].color,
			borderColor: theme[index].color,
		};
	});

	const handleMonthView = () => {
		const calendarInstance = calendarRef.current.getInstance();
		const date = getMomentDate(dateObject);

		calendarInstance.setDate(date);
	};

	return (
		<styled.MainContainerWrapper>
			<DatePicker
				calendarRef={calendarRef}
				handleMonthView={handleMonthView}
			/>
			<Calendar
				tags={tagList}
				works={works?.data}
				calendarRef={calendarRef}
			/>
		</styled.MainContainerWrapper>
	);
}
