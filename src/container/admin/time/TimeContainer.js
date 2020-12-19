import React, { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timeActions from 'stores/time';

export default function AdminTimeContainer() {
	const dispatch = useDispatch();

	const { timeCategories, data } = useSelector((state) => ({
		timeCategories: state?.times?.toJS().categories?.data?.timeCategories,
		data: state?.times?.toJS().tags?.data,
	}));

	const { onGetCategories } = bindActionCreators(timeActions, dispatch);

	useEffect(() => {
		onGetCategories();
	}, []);

	return <>Time Container</>;
}
