import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

export default function UpdateCategoryModal({
	id = '',
	categoryName = '',
	modal,
	setModal,
}) {
	const updated = useSelector((state) => state?.time?.toJS().updated);
	const { loading, done } = updated;

	const dispatch = useDispatch();
	const { onGetCategories, onUpdateCategory } = bindActionCreators(
		timeActions,
		dispatch,
	);

	const [name, setName] = useState('');

	useEffect(() => {
		if (!id) return null;

		setName(categoryName);
	}, [id]);

	const onChange = (e) => {
		const { value } = e.target;

		setName(value);
	};

	const onCancel = useCallback(() => {
		setModal(false);
	}, []);

	useEffect(() => {
		if (!done) return null;
		setModal(false);
		setName('');
		onGetCategories();
	}, [done]);

	return (
		<styled.ModalWrapper
			title="시간대 변경"
			visible={modal}
			onCancel={onCancel}
			onOk={() => onUpdateCategory({ id, name })}
			confirmLoading={loading}
		>
			<styled.ModalInput
				value={name}
				onChange={onChange}
				placeholder="시간대를 입력하세요"
			/>
		</styled.ModalWrapper>
	);
}
