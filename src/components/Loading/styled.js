import styled from 'styled-components';
import 'antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const LoadingWrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;

	background-color: rgba(220, 220, 220, 0.4);

	z-index: 3;
`;

export const LoadingSpin = styled(Spin)``;

export const LoadingIcon = styled(LoadingOutlined)`
	font-size: 80px;
`;
