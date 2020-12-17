import React from 'react';
import * as styled from './styled';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Error({ error = null }) {
	const { role } = useSelector((state) => state?.user?.toJS().logined?.user);

	if (!error) return null;

	const { status, message } = error;

	return (
		<styled.ErrorWrapper
			status={status}
			title={message}
			subTitle="관리자에게 문의 바랍니다."
			extra={
				<styled.ErrorButton type="primary">
					{role === 'admin' ? (
						<Link to="/admin">홈으로 돌아가기</Link>
					) : (
						<Link to="/">홈으로 돌아가기</Link>
					)}
				</styled.ErrorButton>
			}
		></styled.ErrorWrapper>
	);
}
