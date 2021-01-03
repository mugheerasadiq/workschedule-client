import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import {
	AdminTagList,
	CreateCategoryModal,
	UpdateCategoryModal,
	CreateTagModal,
} from 'components';

export default function AdminCategoryList({ categories = [] }) {
	const done = useSelector((state) => state?.time?.toJS().deleted?.done);
	const dispatch = useDispatch();

	const { onGetCategories, onDeleteCategory } = bindActionCreators(
		timeActions,
		dispatch,
	);

	const [createCategoryModal, setCreateCategoryModal] = useState(false);
	const [createTagModal, setCreateTagModal] = useState(false);
	const [updateCategoryModal, setUpdateCategoryModal] = useState({
		modal: false,
		id: '',
		name: '',
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
					<styled.EditButton
						onClick={() =>
							setUpdateCategoryModal({
								modal: true,
								id,
								name,
							})
						}
					/>
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
			<CreateCategoryModal
				modal={createCategoryModal}
				setModal={setCreateCategoryModal}
			/>
			<UpdateCategoryModal
				id={updateCategoryModal.id}
				categoryName={updateCategoryModal.name}
				modal={updateCategoryModal.modal}
				setModal={setUpdateCategoryModal}
			/>
			<CreateTagModal
				modal={createTagModal}
				setModal={setCreateTagModal}
			/>

			<styled.ListAndButtonWrapper>
				{categoryList}
				<styled.CreateButtonWrapper>
					<styled.CreateButton
						onClick={() => setCreateCategoryModal(true)}
					>
						시간대 생성
					</styled.CreateButton>
					<styled.CreateButton
						onClick={() => setCreateTagModal(true)}
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
