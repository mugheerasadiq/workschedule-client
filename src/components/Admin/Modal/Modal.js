import React, { useCallback } from 'react';
import * as styled from './styled';

export default function Modal({ loading, createView, setCreateView }) {
	const { target, modal } = createView;
	const onCancel = useCallback(() => {
		setCreateView({
			modal: false,
			target: '',
		});
	}, []);

	return (
		<styled.ModalWrapper title={target} visible={modal} onCancel={onCancel}>
			ㅎㅇ
		</styled.ModalWrapper>
	);
}
