import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthInput } from 'components';

import * as styled from './styled';

export default function AuthLoginContainer() {
	const history = useHistory();

	const [input, setInput] = useState({
		companyNumber: '',
		password: '',
	});

	const onChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setInput({
				...input,
				[name]: value,
			});
		},
		[input],
	);

	const onClick = useCallback(() => {
		console.log(input);
	});

	const onClickRegister = useCallback(() => {
		history.push('/auth/register');
	});

	return (
		<styled.LoginContainer>
			<styled.LoginWrapper>
				<styled.LoginLogo>로그인</styled.LoginLogo>

				<styled.LoginForm onSubmit={(e) => e.preventDefault()}>
					<AuthInput
						icon="icon-envelope"
						name="companyNumber"
						onChange={onChange}
						placeholder="사번을 입력하세요"
					/>
					<AuthInput
						icon="icon-shield"
						type="password"
						name="password"
						onChange={onChange}
						placeholder="비밀번호를 입력하세요"
					/>

					<styled.LoginButton onClick={onClick}>
						로그인
					</styled.LoginButton>

					<styled.LoginToRegisterButton onClick={onClickRegister}>
						회원가입 하러 가기
					</styled.LoginToRegisterButton>
				</styled.LoginForm>
			</styled.LoginWrapper>
		</styled.LoginContainer>
	);
}
