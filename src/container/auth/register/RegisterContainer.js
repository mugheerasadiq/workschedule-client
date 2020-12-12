import React, { useState, useCallback } from 'react';
import * as styled from './styled';

export default function AuthRegisterContainer(){
    const [input, setInput] = useState({
        companyNumber : '',
        name : '',
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
        window.alert(JSON.stringify(input));
    });
    
    return(
        <styled.RegisterContainer>
            <styled.RegisterWrapper>
                <styled.RegisterLogo>회원 가입</styled.RegisterLogo>

                <styled.RegisterForm onSubmit={e => e.preventDefault()}>
                    <styled.RegisterInputWrapper>
                        <styled.RegisterIcon>
                            <i className="icon-envelope"></i>
                        </styled.RegisterIcon>
                        <styled.RegisterInput 
                            name='companyNumber'
                            onChange={onChange}
                            placeholder='사번을 입력하세요'/>
                    </styled.RegisterInputWrapper>

                    <styled.RegisterInputWrapper>
                        <styled.RegisterIcon>
                            <i className="icon-user"></i>
                        </styled.RegisterIcon>
                        <styled.RegisterInput
                            name='name'
                            onChange={onChange}
                            placeholder='이름을 입력하세요'/>
                    </styled.RegisterInputWrapper>

                    <styled.RegisterInputWrapper>
                        <styled.RegisterIcon>
                            <i className="icon-shield"></i>
                        </styled.RegisterIcon>
                        <styled.RegisterInput 
                            type='password'
                            name='password'
                            onChange={onChange}
                            placeholder='비밀번호를 입력하세요'/>
                    </styled.RegisterInputWrapper>
                
                <styled.RegisterButton onClick={onClick}>회원가입</styled.RegisterButton>
                </styled.RegisterForm>
            </styled.RegisterWrapper>
        </styled.RegisterContainer>
    )
}