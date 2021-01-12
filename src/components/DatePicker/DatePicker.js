import React, { useState, useCallback } from 'react';
import * as styled from './styled';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { getTimePickerDate } from 'utils';
import Request from 'services/request';
import locale from 'antd/lib/locale/ko_KR';

export default function DatePickerComponent() {
	const history = useHistory();

	const [date, setDate] = useState({
		year: null,
		month: null,
	});
	const logined = useSelector((state) => state?.user?.toJS().logined);
	const role = logined?.user?.role;

	const dispatch = useDispatch();

	const { onGetWorks } = bindActionCreators(workActions, dispatch);

	const onChange = useCallback((date) => {
		const dateObject = getTimePickerDate(date);
		setDate(dateObject);
	}, []);

	const onClick = useCallback(() => {
		const queryString = Request.onQuery(date);

		if (role === 'user') {
			history.push(`/main${queryString}`);
		} else if (role === 'admin') {
			history.push(`/admin${queryString}`);
		}

		onGetWorks(date);
	}, [date]);

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
