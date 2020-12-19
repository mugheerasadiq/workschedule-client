import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'stores/user';

import * as styled from './styled';

export default function PcHeader() {
	const history = useHistory();
	const dispatch = useDispatch();

	const { onLogout } = bindActionCreators(userActions, dispatch);

	const onClickLogout = useCallback((e) => {
		onLogout();
		history.push('/auth/login');
	}, []);

	return (
		<styled.LayoutWrapper>
			<styled.PcHeader className="Header">
				<styled.PcLogo to="/work">Work Schedule</styled.PcLogo>
				<styled.IconButton
					title="로그아웃 하시겠습니까?"
					onConfirm={onClickLogout}
					okText="로그아웃"
					cancelText="취소"
				>
					<styled.ConfirmAlert href="#">
						<styled.LogoutIcon />
					</styled.ConfirmAlert>
				</styled.IconButton>
			</styled.PcHeader>
		</styled.LayoutWrapper>
	);
}
