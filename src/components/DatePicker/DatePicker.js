import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { getTimePickerDate } from 'utils';
import Request from 'services/request';
import locale from 'antd/lib/locale/ko_KR';

export default function DatePickerComponent({ handleMonthView }) {
	const history = useHistory();

	const [date, setDate] = useState({
		year: null,
		month: null,
	});
	const { works, logined } = useSelector((state) => ({
		works: state?.work?.toJS().works,
		logined: state?.user?.toJS().logined,
	}));
	const role = logined?.user?.role;

	const dispatch = useDispatch();

	const { onGetWorks } = bindActionCreators(workActions, dispatch);

	const onChange = useCallback((date) => {
		const dateObject = getTimePickerDate(date);
		setDate(dateObject);
	}, []);

	const onClick = useCallback(() => {
		const queryString = Request.onQuery(date);

		if (!queryString) return null;

		if (role === 'user') {
			history.replace(`/main${queryString}`);
		} else if (role === 'admin') {
			history.replace(`/admin${queryString}`);
		}

		onGetWorks(date);
	}, [date]);

	useEffect(() => {
		if (!works?.done || role !== 'user') return null;
		handleMonthView();
	}, [works?.done]);

	return (
		<styled.DatePickerWraper>
			<styled.DatePickerToggle
				locale={locale}
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
