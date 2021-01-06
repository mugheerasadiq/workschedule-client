import React, { useState, useCallback } from 'react';
import * as styled from './styled';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { getTimePickerDate } from 'utils';

export default function DatePickerComponent() {
	const [date, setDate] = useState({
		year: null,
		month: null,
	});
	const dispatch = useDispatch();

	const { onGetWorks } = bindActionCreators(workActions, dispatch);

	const onChange = useCallback((date) => {
		const dateObject = getTimePickerDate(date);
		setDate(dateObject);
	}, []);

	const onClick = useCallback(() => {
		onGetWorks(date);
	}, [date]);
	return (
		<styled.DatePickerWraper>
			<styled.DatePickerToggle
				size="large"
				onChange={onChange}
				picker="month"
				placeholder="연, 월을 검색하세요"
			/>
			<styled.DateSearchButton size="large" onClick={onClick}>
				검색
			</styled.DateSearchButton>
		</styled.DatePickerWraper>
	);
}
