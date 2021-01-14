import React from 'react';
import * as styled from './styled';

import { Select } from 'antd';

import { checkYesterdayTag, checkTomorrowTag } from 'utils';
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

	const checkedYesterdayTag = checkYesterdayTag(
		tempTable,
		day,
		userIndex,
		tagList,
	);
	const checkedTomorrowTag = checkTomorrowTag(
		tempTable,
		day,
		userIndex,
		checkedYesterdayTag,
	);

	return (
		<styled.TagSelect
			showSearch
			value={value}
			showArrow={false}
			onChange={onChange}
		>
			{checkedTomorrowTag?.map((tag) => (
				<Option key={tag.name} value={tag.name}>
					{tag.name}
				</Option>
			))}
		</styled.TagSelect>
	);
}
