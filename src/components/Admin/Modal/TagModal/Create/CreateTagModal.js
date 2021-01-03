import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { SelectCategory, TagTime } from 'components';

export default function CreateTagModal({ modal, setModal }) {
	const created = useSelector((state) => state?.time?.toJS().created);
	const { loading, done } = created;

	const dispatch = useDispatch();
	const { onGetCategories, onCreateTag } = bindActionCreators(
		timeActions,
		dispatch,
	);

	const [inputs, setInputs] = useState({
		timeCategory: '',
		name: '',
		start: '',
		end: '',
	});

	const onChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setInputs({
				...inputs,
				[name]: value,
			});
		},
		[inputs, setInputs],
	);

	const onCancel = useCallback(() => {
		setModal(false);
	}, []);

	useEffect(() => {
		if (!done) return null;
		setModal(false);
		setInputs({ timeCategory: '', name: '', start: '', end: '' });
		onGetCategories();
	}, [done]);

	return (
		<styled.ModalWrapper
			title="조 생성"
			visible={modal}
			onCancel={onCancel}
			onOk={() => onCreateTag({ params: inputs })}
			confirmLoading={loading}
		>
			<SelectCategory inputs={inputs} setInputs={setInputs} />
			<styled.ModalInput
				name="name"
				value={inputs.name}
				onChange={onChange}
				placeholder="조이름을 입력하세요"
			/>
			<TagTime inputs={inputs} setInputs={setInputs} />
		</styled.ModalWrapper>
	);
}
