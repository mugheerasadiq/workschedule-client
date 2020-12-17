import React, { useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'stores/user';

import * as styled from './styled';

export default function PcHeader() {
	const history = useHistory();
	const dispatch = useDispatch();

	const { onLogout } = bindActionCreators(userActions, dispatch);

	const { role } = useSelector((state) => state?.user?.toJS()?.logined?.user);
	const isAdmin = role && role === 'admin';

	const onClickLogout = useCallback((e) => {
		onLogout();
		history.push('/auth/login');
	}, []);

	const onClickAdmin = useCallback((e) => {
		history.push('/admin');
	});

	return (
		<styled.LayoutWrapper>
			<styled.PcHeader className="Header">
				<styled.PcLogo to="/work">Work Schedule</styled.PcLogo>
				<styled.ButtonWrapper>
					{isAdmin && (
						<styled.IconButton
							title="어드민페이지로 이동하시겠습니까?"
							onConfirm={onClickAdmin}
							okText="이동"
							cancelText="취소"
						>
							<styled.ConfirmAlert href="#">
								<styled.AdminIcon />
							</styled.ConfirmAlert>
						</styled.IconButton>
					)}
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
				</styled.ButtonWrapper>
			</styled.PcHeader>
		</styled.LayoutWrapper>
	);
}
