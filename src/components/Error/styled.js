import styled from 'styled-components';
import { Result, Button } from 'antd';
import 'antd.css';

export const ErrorPage = styled.div`
	width: 100%;
	min-height: 100vh;

	position: fixed;
	top: 0;
	left: 0;

	z-index: 6;

	background-color: rgba(150, 150, 150, 0.2);
`;
export const ErrorWrapper = styled(Result)`
	margin: 20vh auto;
`;

export const ErrorButton = styled(Button)``;
