import React, { useEffect } from 'react';
import * as styled from './styled';

import { useSelector } from 'react-redux';

import { parseTimestamp } from 'utils';

export default function AdminTagList({ name = null, tagView = null }) {
	const data = useSelector((state) => state?.time?.toJS().tags?.data);

	if (!tagView?.view) return null;
	if (name !== tagView?.name) return null;

	let tags = [];

	for (let category in data) {
		if (category === name) {
			tags.push(...data[category]);
		}
	}

	const tagList = tags.map((tag) => {
		return <AdminTagItem key={tag.name} tag={tag} />;
	});

	return <styled.TagList>{tagList}</styled.TagList>;
}

function AdminTagItem({ tag = [] }) {
	let { name, start, end } = tag;

	const startTime = parseTimestamp(start);
	const endTime = parseTimestamp(end);

	return (
		<styled.TagItem>
			<styled.ItemGroup>{`${name}조`}</styled.ItemGroup>
			<styled.ItemTime>{`${startTime} ~ ${endTime}`}</styled.ItemTime>
		</styled.TagItem>
	);
}
