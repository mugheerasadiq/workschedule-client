import React, { useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { DatePicker, Calendar } from 'components';

export default function MainContainer() {
	const dispatch = useDispatch();

	const { onGetCategories } = bindActionCreators(timeActions, dispatch);

	const { times, works } = useSelector((state) => ({
		times: state?.time?.toJS().tags,
		works: state?.work?.toJS().works,
	}));

	useEffect(() => {
		onGetCategories();
	}, []);

	const tags = [];
	const tagList = [];
	for (let category in times?.data) {
		tags.push(...times?.data[category]);
	}
	tags.forEach((tag) => {
		tagList.push({
			id: tag?.id,
			name: tag?.name,
		});
	});

	return (
		<styled.MainContainerWrapper>
			<DatePicker />
			<Calendar tags={tagList} works={works?.data} />
		</styled.MainContainerWrapper>
	);
}
