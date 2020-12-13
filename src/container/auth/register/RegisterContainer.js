import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { AuthInput } from 'components';
import * as authActions from 'stores/auth';

import * as styled from './styled';

export default function AuthRegisterContainer() {
	const history = useHistory();
	const dispatch = useDispatch();

	const { done } = useSelector((state) => state?.auth?.toJS().register);

	const { onRegister } = bindActionCreators(authActions, dispatch);

	const [input, setInput] = useState({
		email: '',
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
		console.log('Register...');
		onRegister(input);
	});

	useEffect(() => {
		if (!done) return;
		history.push('/auth/login');
	}, [done]);

	// Issue
	return (
		<styled.RegisterContainer>
			<styled.RegisterWrapper>
				<styled.RegisterLogo>회원 가입</styled.RegisterLogo>

				<styled.RegisterForm onSubmit={(e) => e.preventDefault()}>
					<AuthInput
						icon="icon-envelope"
						name="email"
						onChange={onChange}
						placeholder="이메일을 입력하세요"
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
