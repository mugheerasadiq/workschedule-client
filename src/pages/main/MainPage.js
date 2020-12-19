import React, { useEffect } from 'react';
import * as styled from './styled';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { PcHeader } from 'ui';
import { MainContainer } from 'container';

export default function MainPage() {
	const dispatch = useDispatch();

	const { onGetWorks } = bindActionCreators(workActions, dispatch);

	const query = { year: 2020, month: 12 };

	useEffect(() => {
		onGetWorks({ query });
	}, []);

	return (
		<styled.MainPageWrapper>
			<PcHeader />
			<MainContainer />
		</styled.MainPageWrapper>
	);
}
