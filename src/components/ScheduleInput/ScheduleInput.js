import React, { useState, useCallback } from 'react';
import * as styled from './styled';

import { Select } from 'antd';

import { checkYesterdayTag } from 'utils';
const { Option } = Select;

export default function ScheduleInput({
	day,
	userIndex,
	value = '',
	tagList = [],
	onInputChange,
	tempTable,
}) {
	const onChange = (value) => {
		onInputChange(day, userIndex)(value);
	};

	const checkedTagList = checkYesterdayTag(
		tempTable,
		day,
		userIndex,
		tagList,
	);

	return (
		<styled.TagSelect
			showSearch
			value={value}
			showArrow={false}
			onChange={onChange}
		>
			{tagList?.map((tag) => (
				<Option key={tag.name} value={tag.name}>
					{tag.name}
				</Option>
			))}
		</styled.TagSelect>
	);
}
