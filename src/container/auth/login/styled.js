import styled from 'styled-components';

export const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoginWrapper = styled.div`
	width: 400px;
	height: 500px;

	background-color: #ebebeb;

	display: flex;
	flex-direction: column;

	-webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
	-moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
	box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);

	border: solid 1px #cbc9c9;
	border-radius: 8px/7px;

	-webkit-border-radius: 8px/7px;
	-moz-border-radius: 8px/7px;
`;

export const LoginLogo = styled.h1`
	margin-bottom: 10px;
	padding-top: 20px;
	padding-bottom: 20px;

	color: #000;

	font-size: 32px;
	font-family: 'S-CoreDream-3Light';
	font-weight: 700;

	text-align: center;
	border-bottom: 1px solid rgba(200, 200, 200, 0.3);
`;

export const LoginForm = styled.form`
	margin: auto 30px;
	padding-bottom: 45px;
`;

export const LoginButton = styled.button`
	width: 100%;
	height: 38px;
	margin-top: 40px;
	padding: 6px 20px 0px 20px;

	color: white;
	font-size: 14px;
	font-weight: 600;
	background-color: #3a57af;

	border: none;
	border-radius: 5px;
	box-shadow: 0 3px rgba(58, 87, 175, 0.75);

	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-box-shadow: 0 3px rgba(58, 87, 175, 0.75);
	-moz-box-shadow: 0 3px rgba(58, 87, 175, 0.75);

	cursor: pointer;
`;

export const LoginToRegisterButton = styled.p`
	width: 100%;
	margin-top: 17px;

	text-align: center;

	color: #999;
	cursor: pointer;
`;
