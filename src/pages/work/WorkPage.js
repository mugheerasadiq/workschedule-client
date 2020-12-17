import React, { useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { WorkContainer } from 'container';

export default function WorkPage() {
	const dispatch = useDispatch();

	const { onGetWorks } = bindActionCreators(workActions, dispatch);
	const { loginTime } = useSelector((state) => state?.user?.toJS().logined);

	const query = { year: 2020, month: 12 };

	useEffect(() => {
		if (!loginTime) return;
		onGetWorks({ query });
	}, [loginTime]);

	return (
		<styled.WorkPageWrapper>
			<WorkContainer />
		</styled.WorkPageWrapper>
	);
}
