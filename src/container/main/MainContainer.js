import React, { useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { DatePicker, Calendar } from 'components';
import { theme } from 'ui';

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

	return (
		<styled.MainContainerWrapper>
			<DatePicker />
			<Calendar tags={tagList} works={works?.data} />
		</styled.MainContainerWrapper>
	);
}
