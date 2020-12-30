import React, { useCallback } from 'react';
import * as styled from './styled';
import 'antd.css';
import { Select } from 'antd';

import { useSelector } from 'react-redux';
const { Option } = Select;

export default function SelectCategory({ inputs, setInputs }) {
	const { timeCategories } = useSelector(
		(state) => state?.time?.toJS().categories?.data,
	);

	const onFocus = () => {
		console.log('focus');
	};

	const onChange = useCallback(
		(key, value) => {
			setInputs({
				...inputs,
				timeCategory: value.key,
			});
			console.log(`select`, inputs);
		},
		[inputs, setInputs],
	);

	return (
		<styled.SelectCategories
			showSearch="true"
			placeholder="시간대를 검색하세요"
			onChange={onChange}
			onFocus={onFocus}
		>
			{timeCategories?.map((timeCategory) => (
				<Option key={timeCategory.id} value={timeCategory.name}>
					{timeCategory?.name}
				</Option>
			))}
		</styled.SelectCategories>
	);
}
