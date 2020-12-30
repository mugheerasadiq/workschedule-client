import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

export default function CategoryModal({ modal, setModal }) {
	const created = useSelector((state) => state?.time?.toJS().created);
	const { loading, done } = created;

	const dispatch = useDispatch();
	const { onGetCategories, onCreateCategory } = bindActionCreators(
		timeActions,
		dispatch,
	);

	const [name, setName] = useState('');

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
			title="시간대 생성"
			visible={modal}
			onCancel={onCancel}
			onOk={() => onCreateCategory({ name })}
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
