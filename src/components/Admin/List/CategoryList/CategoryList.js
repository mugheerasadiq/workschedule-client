import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { AdminTagList, Modal } from 'components';

export default function AdminCategoryList({ categories = [] }) {
	const dispatch = useDispatch();

	const {
		onCreateCategory,
		onUpdateCategory,
		onDeleteCategory,
	} = bindActionCreators(timeActions, dispatch);

	const [tagView, setTagView] = useState({
		view: false,
		name: '',
	});

	const [createView, setCreateView] = useState({
		modal: false,
		target: '',
	});
	const [editInput, setEditInput] = useState('');

	const onClickTagView = useCallback((name) => {
		setTagView({
			view: true,
			name,
		});
	}, []);

	const onClickCreateCategory = useCallback(() => {
		setCreateView({
			modal: true,
			target: '카테고리 생성',
		});
	}, []);

	const onClickEdit = useCallback((name, id) => {}, []);

	const onClickDelete = useCallback((id) => {
		onDeleteCategory({ id });
	}, []);

	const categoryList = categories?.map((category, index) => {
		const name = category?.name;
		const id = category?.id;

		return (
			<styled.CategoryListWrapper key={index}>
				<styled.CategoryWrapper>
					<styled.TagViewButton onClick={() => onClickTagView(name)}>
						+
					</styled.TagViewButton>
					<AdminCategoryItem key={name} name={name} />
					<styled.DeleteButton onClick={() => onClickDelete(id)} />
				</styled.CategoryWrapper>
				<AdminTagList key={name} tagView={tagView} name={name} />
			</styled.CategoryListWrapper>
		);
	});

	return (
		<>
			<Modal createView={createView} setCreateView={setCreateView} />
			<styled.ListAndButtonWrapper>
				{categoryList}
				<styled.CreateButtonWrapper>
					<styled.CreateButton onClick={onClickCreateCategory}>
						시간대 생성
					</styled.CreateButton>
					<styled.CreateButton>조 생성</styled.CreateButton>
				</styled.CreateButtonWrapper>
			</styled.ListAndButtonWrapper>
		</>
	);
}

function AdminCategoryItem({ name = '' }) {
	return <styled.CategoryItem>{name}</styled.CategoryItem>;
}
