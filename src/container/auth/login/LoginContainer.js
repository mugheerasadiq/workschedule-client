import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as styled from './styled';

export default function AuthLoginContainer(){
    const history = useHistory();
    
    const [input, setInput] = useState({
        companyNumber : '',
        password : ''
    });

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name] : value
        });
    },[input]);
    
    const onClick = useCallback(() => {
        console.log(input)
    });

    const onClickRegister = useCallback(() => {
        history.push('/auth/register');
    })

    return(
        <styled.LoginContainer>
            <styled.LoginWrapper>
                <styled.LoginLogo>로그인</styled.LoginLogo>

                <styled.LoginForm onSubmit={e => e.preventDefault()}>
                    <styled.LoginInputWrapper>
                        <styled.LoginIcon>
                            <i className="icon-envelope"></i>
                        </styled.LoginIcon>
                        <styled.LoginInput 
                            name='companyNumber'
                            onChange={onChange}
                            placeholder='사번을 입력하세요'/>
                    </styled.LoginInputWrapper>

                    <styled.LoginInputWrapper>
                        <styled.LoginIcon>
                            <i className="icon-shield"></i>
                        </styled.LoginIcon>
                        <styled.LoginInput 
                            type='password'
                            name='password'
                            onChange={onChange}
                            placeholder='비밀번호를 입력하세요'/>
                    </styled.LoginInputWrapper>

                    <styled.LoginButton onClick={onClick}>로그인</styled.LoginButton>

                    <styled.LoginToRegisterButton onClick={onClickRegister}>회원가입 하러 가기</styled.LoginToRegisterButton>
                </styled.LoginForm>
            </styled.LoginWrapper>
        </styled.LoginContainer>
    )
}