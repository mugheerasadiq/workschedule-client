import React, { useState, useEffect } from 'react';

import * as styled from './styled';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timeActions from 'stores/time';

export default function AdminTimeContainer() {
	const [category, setCategory] = useState(null);

	const dispatch = useDispatch();

	const { timeCategories, timeTags } = useSelector((state) => ({
		timeCategories: state?.time?.toJS().categories?.data?.timeCategories,
		timeTags: state?.time?.toJS().tags?.data?.timeTags,
	}));
	const columns = () => [
		{
			title: '시간대',
			dataIndex: 'category',
			key: 'category',
			render: (category, key) => (
				<a onClick={() => onGetTags(key.id)}>{category}</a>
			),
		},
	];

	const tags = [];

	if (timeTags?.length > 0) {
		timeTags.forEach((tag) => {
			tags.push({
				key: tag.id,
				name: tag.name,
				start: tag.start,
				end: tag.end,
			});
		});
	}
	const {
		onGetCategories,
		onCreateCategory,
		onUpdateCategory,
		onDeleteCategory,
		onGetTags,
		onCreateTag,
		onUpdateTag,
		onDeleteTag,
	} = bindActionCreators(timeActions, dispatch);

	let categories = [];

	if (timeCategories?.length > 0) {
		timeCategories.forEach((category) => {
			categories.push({
				key: category.id,
				id: category.id,
				category: category.name,
			});
		});
	}

	const expandedRowRender = () => {
		const columns = [
			{ title: '조', dataIndex: 'name', key: 'name' },
			{ title: '시작', dataIndex: 'start', key: 'start' },
			{ title: '끝', dataIndex: 'end', key: 'end' },
		];

		return (
			<styled.CategoryTable
				columns={columns}
				dataSource={tags}
				pagination={false}
			/>
		);
	};

	useEffect(() => {
		onGetCategories();
	}, []);

	return (
		<styled.CategoryWrapper>
			<styled.CategoryTable
				columns={columns()}
				expandable={{
					expandedRowRender,
					onExpand: (key) => onGetTags(key.id),
				}}
				onExpandedRowsChange
				dataSource={categories}
				pagination={{
					hideOnSinglePage: true,
				}}
			/>
		</styled.CategoryWrapper>
	);
}
