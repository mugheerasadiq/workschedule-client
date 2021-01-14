import React, { useState, useEffect } from 'react';
import * as styled from './styled';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Error({ error = null }) {
	const [active, setActive] = useState(error);
	const { role } = useSelector((state) => state?.user?.toJS().logined?.user);

	useEffect(() => {
		if (!active) return null;
	}, [active]);

	const status = error?.status;
	const message = error?.message;

	return (
		<styled.ErrorPage active={active}>
			<styled.ErrorWrapper
				status={status}
				title={message}
				subTitle="관리자에게 문의 바랍니다."
				extra={
					<styled.ErrorButton
						type="primary"
						onClick={() => setActive(false)}
					>
						{role === 'admin' ? (
							<Link to="/admin">홈으로 돌아가기</Link>
						) : (
							<Link to="/main">홈으로 돌아가기</Link>
						)}
					</styled.ErrorButton>
				}
			></styled.ErrorWrapper>
		</styled.ErrorPage>
	);
}
