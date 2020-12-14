import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { Redirect } from 'react-router-dom';
import { WorkContainer } from 'container';

export default function WorkPage() {
	const dispatch = useDispatch();

	const { onGetWorks } = bindActionCreators(workActions, dispatch);
	const query = { year: 2020, month: 12 };

	useEffect(() => {
		onGetWorks({ query });
	});

	return <></>;
}
