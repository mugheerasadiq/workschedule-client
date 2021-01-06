import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';
import * as timeActions from 'stores/time';

import { Calendar, DatePicker } from 'components';

export default function AdminGetWorksContainer() {
	const dispatch = useDispatch();

	const { times, works } = useSelector((state) => ({
		times: state.time.toJS().tags,
		works: state.work.toJS().works,
	}));
	// works.data 랑 동일
	const [tempWorks, setTempWorks] = useState([]);

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

	const { onGetWorks } = bindActionCreators(workActions, dispatch);
	const { onGetCategories } = bindActionCreators(timeActions, dispatch);

	const onCreateWork = useCallback(() => {
		// 1. request
		// 2. 성공을 했던 실패를 했던 간에 tempWorks 데이터를 변경하고
		// 3. onGetWorks()

		if (tempWorks?.length > 0) setTempWorks([...tempWorks, tempWorks[0]]);

		// post 요청을 하잖아
		setTimeout(() => onGetWorks({ year: 2021, month: 1 }), 2000);
	}, [works?.data, tempWorks]);

	useEffect(() => {
		onGetCategories();
	}, []);

	useEffect(() => {
		if (works?.done) setTempWorks(works?.data);
	}, [works?.done]);

	useEffect(() => {
		// post 요청에 성공했는지, 실패했는지에 따라서
		// error
		// if(error) onGetWorks()
	}, []);

	console.log(`Works data, TempWorks data`, works?.data, tempWorks);

	return (
		<>
			<DatePicker />
			<Button onClick={onCreateWork}>캐시 처리</Button>
			<Calendar tags={tagList} works={tempWorks} />
		</>
	);
}
