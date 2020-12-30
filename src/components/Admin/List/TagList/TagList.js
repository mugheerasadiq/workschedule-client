import React from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { parseTimestamp } from 'utils';

export default function AdminTagList({ name = null }) {
	const data = useSelector((state) => state?.time?.toJS().tags?.data);
	const dispatch = useDispatch();

	const { onDeleteTag } = bindActionCreators(timeActions, dispatch);

	let tags = [];

	for (let category in data) {
		if (category === name) {
			tags.push(...data[category]);
		}
	}

	const tagList = tags.map((tag) => {
		return <AdminTagItem key={tag.name} tag={tag} onClick={onDeleteTag} />;
	});

	return <styled.TagList>{tagList}</styled.TagList>;
}

function AdminTagItem({ tag = [], onClick }) {
	let { id, name, start, end } = tag;

	const startTime = parseTimestamp(start);
	const endTime = parseTimestamp(end);

	return (
		<styled.TagItem>
			<styled.ItemGroup>{`${name}조`}</styled.ItemGroup>
			<styled.ItemTime>{`${startTime} ~ ${endTime}`}</styled.ItemTime>
			<styled.DeleteButton onClick={() => onClick({ id })} />
		</styled.TagItem>
	);
}
