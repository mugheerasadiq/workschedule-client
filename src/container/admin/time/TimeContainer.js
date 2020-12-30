import React, { useState, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { Loading, Error, AdminCategoryList, Modal } from 'components';

export default function AdminTimeContaier() {
	const dispatch = useDispatch();

	const {
		onGetCategories,
		onCreateTag,
		onUpdateTag,
		onDeleteTag,
	} = bindActionCreators(timeActions, dispatch);

	const categories = useSelector((state) => state?.time?.toJS().categories);

	useEffect(() => {
		onGetCategories();
	}, []);

	const loading = categories?.loading;
	const error = categories?.error;
	const timeCategories = categories?.data?.timeCategories;

	return (
		<>
			<Error error={error} />
			<Loading loading={loading} />

			<styled.TimeContainerWrapper>
				<styled.TimeContainerLogo>시간대</styled.TimeContainerLogo>
				<AdminCategoryList categories={timeCategories} />
			</styled.TimeContainerWrapper>
		</>
	);
}
