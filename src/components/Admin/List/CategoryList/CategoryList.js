import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { AdminTagList, CategoryModal, TagModal } from 'components';

export default function AdminCategoryList({ categories = [] }) {
	const done = useSelector((state) => state?.time?.toJS().deleted?.done);
	const dispatch = useDispatch();

	const {
		onGetCategories,
		onUpdateCategory,
		onDeleteCategory,
	} = bindActionCreators(timeActions, dispatch);

	const [categoryModal, setCategoryModal] = useState(false);
	const [tagModal, setTagModal] = useState(false);

	const onModalClick = useCallback((setModal) => {
		setModal(true);
	});

	useEffect(() => {
		if (!done) return null;
		onGetCategories();
	}, [done]);

	const categoryList = categories?.map((category, index) => {
		const name = category?.name;
		const id = category?.id;

		return (
			<styled.CategoryListWrapper key={index}>
				<styled.CategoryWrapper>
					<AdminCategoryItem key={name} name={name} />
					<styled.DeleteButton
						onClick={() => onDeleteCategory({ id })}
					/>
				</styled.CategoryWrapper>
				<AdminTagList key={name} name={name} />
			</styled.CategoryListWrapper>
		);
	});

	return (
		<>
			<CategoryModal modal={categoryModal} setModal={setCategoryModal} />
			<TagModal modal={tagModal} setModal={setTagModal} />

			<styled.ListAndButtonWrapper>
				{categoryList}
				<styled.CreateButtonWrapper>
					<styled.CreateButton
						onClick={() => onModalClick(setCategoryModal)}
					>
						시간대 생성
					</styled.CreateButton>
					<styled.CreateButton
						onClick={() => onModalClick(setTagModal)}
					>
						조 생성
					</styled.CreateButton>
				</styled.CreateButtonWrapper>
			</styled.ListAndButtonWrapper>
		</>
	);
}

function AdminCategoryItem({ name = '' }) {
	return <styled.CategoryItem>{name}</styled.CategoryItem>;
}
