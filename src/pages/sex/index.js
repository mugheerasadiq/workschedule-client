import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timesActions from 'stores/times';

export default function SexPage() {
	const dispatch = useDispatch();

	const { onGetCategories } = bindActionCreators(timesActions, dispatch);

	useEffect(() => {
		onGetCategories();
	});

	return <>Get Category Page</>;
}
