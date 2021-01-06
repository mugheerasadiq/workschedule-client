import React, { useCallback, useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';

import { SelectCategory, TagTime } from 'components';
import { parseAndReturnTimeStamp } from 'utils';

export default function UpdateTagModal({ modal, setModal }) {
	const updated = useSelector((state) => state?.time?.toJS().updated);
	const { loading, done } = updated;

	const dispatch = useDispatch();
	const { onGetCategories, onUpdateTag } = bindActionCreators(
		timeActions,
		dispatch,
	);

	const onChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setModal({
				...modal,
				[name]: value,
			});
		},
		[modal, setModal],
	);

	const onCancel = useCallback(() => {
		setModal({
			modal: false,
		});
	}, []);

	const startObject = parseAndReturnTimeStamp(modal.start);
	const endObject = parseAndReturnTimeStamp(modal.end);

	useEffect(() => {
		if (!done) return null;
		setModal({
			modal: false,
			timeCategory: null,
			id: null,
			name: null,
			start: null,
			end: null,
		});
		onGetCategories();
	}, [done]);

	const params = { ...modal };
	return (
		<styled.ModalWrapper
			title="조 변경"
			visible={modal?.modal}
			onCancel={onCancel}
			onOk={() => onUpdateTag(params)}
			confirmLoading={loading}
		>
			<SelectCategory inputs={modal} setInputs={setModal} />
			<styled.ModalInput
				name="name"
				value={modal.name}
				onChange={onChange}
				placeholder="조이름을 입력하세요"
			/>
			<TagTime
				startObject={startObject}
				endObject={endObject}
				inputs={modal}
				setInputs={setModal}
			/>
		</styled.ModalWrapper>
	);
}
