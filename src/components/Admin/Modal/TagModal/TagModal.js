import React, { useState, useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { SelectCategory } from 'components';

export default function TagModal({ modal, setModal }) {
	const created = useSelector((state) => state?.time?.toJS().created);
	const { loading, done } = created;

	const dispatch = useDispatch();
	const { onGetCategories, onCreateTag } = bindActionCreators(
		timeActions,
		dispatch,
	);

	const [inputs, setInputs] = useState({
		id: '',
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
			console.log(inputs);
		},
		[inputs, setInputs],
	);

	const onOk = useCallback(() => {
		setInputs({ ...inputs });
		onCreateTag({ params: inputs });
	}, [inputs]);

	const onCancel = useCallback(() => {
		setModal(false);
	}, []);

	useEffect(() => {
		if (!done) return null;
		setModal(false);
		setInputs({ id: '', name: '', start: '', end: '' });
		onGetCategories();
	}, [done]);

	return (
		<styled.ModalWrapper
			title="시간대 생성"
			visible={modal}
			onCancel={onCancel}
			onOk={onOk}
			confirmLoading={loading}
		>
			<SelectCategory inputs={inputs} setInputs={setInputs} />
			<styled.ModalInput
				name="name"
				value={inputs.name}
				onChange={onChange}
				placeholder="조이름을 입력하세요"
			/>
			<styled.ModalInput
				name="start"
				value={inputs.start}
				onChange={onChange}
				placeholder="시작시간을 입력하세요"
			/>
			<styled.ModalInput
				name="end"
				value={inputs.end}
				onChange={onChange}
				placeholder="끝나는 시간을 입력하세요"
			/>
		</styled.ModalWrapper>
	);
}
