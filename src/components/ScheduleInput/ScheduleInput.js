import React from 'react';
import * as styled from './styled';

import { Select } from 'antd';

import { checkYesterdayTag, checkTomorrowTag } from 'utils';
const { Option } = Select;

export default function ScheduleInput({
	day,
	beforeDay,
	userIndex,
	value = [],
	tagList = [],
	onInputChange,
	tempTable,
	beforeSource = [],
	afterSource = [],
}) {
	const onChange = (value) => {
		onInputChange(day, userIndex, value);
	};

	const checkedYesterdayTag = checkYesterdayTag(
		tempTable,
		day,
		userIndex,
		tagList,
		beforeSource,
		beforeDay,
	);
	const checkedTomorrowTag = checkTomorrowTag(
		tempTable,
		day,
		userIndex,
		checkedYesterdayTag,
		afterSource,
	);

	return (
		<styled.TagSelect
			showSearch
			value={value?.[1]}
			showArrow={false}
			onChange={onChange}
			allowClear
		>
			{checkedTomorrowTag?.map((tag) => (
				<Option key={tag.name} value={tag.name}>
					{tag.name}
				</Option>
			))}
		</styled.TagSelect>
	);
}
