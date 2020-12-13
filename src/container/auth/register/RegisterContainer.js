import React, { useState, useCallback } from 'react';

import { AuthInput } from 'components';

import * as styled from './styled';

export default function AuthRegisterContainer() {
	const [input, setInput] = useState({
		companyNumber: '',
		name: '',
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
		window.alert(JSON.stringify(input));
	});
	// Issue
	return (
		<styled.RegisterContainer>
			<styled.RegisterWrapper>
				<styled.RegisterLogo>회원 가입</styled.RegisterLogo>

				<styled.RegisterForm onSubmit={(e) => e.preventDefault()}>
					<AuthInput
						icon="icon-envelope"
						name="companyNumber"
						onChange={onChange}
						placeholder="사번을 입력하세요"
					/>
					<AuthInput
						icon="icon-user"
						name="name"
						onChange={onChange}
						placeholder="이름을 입력하세요"
					/>
					<AuthInput
						icon="icon-shield"
						type="password"
						name="password"
						onChange={onChange}
						placeholder="비밀번호를 입력하세요"
					/>

					<styled.RegisterButton onClick={onClick}>
						회원가입
					</styled.RegisterButton>
				</styled.RegisterForm>
			</styled.RegisterWrapper>
		</styled.RegisterContainer>
	);
}
