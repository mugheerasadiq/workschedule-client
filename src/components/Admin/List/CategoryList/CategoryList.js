import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector } from 'react-redux';

import AdminTagList from '../TagList';

export default function AdminCategoryList({ categories = [] }) {
	const [tagView, setTagView] = useState({
		view: false,
		name: '',
	});

	const onClick = useCallback((name) => {
		setTagView({
			view: true,
			name,
		});
	}, []);

	const categoryList = categories?.map((category, index) => {
		const name = category?.name;

		return (
			<styled.CategoryListWrapper key={index}>
				<styled.CategoryWrapper>
					<styled.TagViewButton onClick={() => onClick(name)}>
						+
					</styled.TagViewButton>
					<AdminCategoryItem key={name} name={name} />
				</styled.CategoryWrapper>
				<AdminTagList key={name} tagView={tagView} name={name} />
			</styled.CategoryListWrapper>
		);
	});

	return <>{categoryList}</>;
}

function AdminCategoryItem({ name = '' }) {
	return <styled.CategoryItem>{name}</styled.CategoryItem>;
}
