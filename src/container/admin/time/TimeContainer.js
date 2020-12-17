import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

export default function AdminTimeContainer() {
	const dispatch = useDispatch();

	const {
		onGetCategories,
		onCreateCategory,
		onUpdateCategory,
		onDeleteCategory,
		onCreateTag,
		onUpdateTag,
		onDeleteTag,
	} = bindActionCreators(timeActions, dispatch);

	const { timeCategories, data } = useSelector((state) => ({
		timeCategories: state?.times?.toJS().categories?.data?.timeCategories,
		data: state?.times?.toJS().tags?.data,
	}));

	return <>AdminTimeContainer</>;
}
