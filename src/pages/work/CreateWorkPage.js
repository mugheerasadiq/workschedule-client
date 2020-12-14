import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

export default function CreateWorkPage() {
	const dispatch = useDispatch();

	const { onCreateWorks } = bindActionCreators(workActions, dispatch);

	const nowTime = new Date().getTime();
	const timeStamp = new Date(nowTime);

	const params = {
		date: timeStamp,
		end: timeStamp,
		start: timeStamp,
	};

	useEffect(() => {
		onCreateWorks({ params });
	});

	return <></>;
}
