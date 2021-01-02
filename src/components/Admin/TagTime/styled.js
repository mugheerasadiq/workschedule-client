import styled from 'styled-components';
import 'antd.css';
import { Input, Typography } from 'antd';

export const timeWrapper = styled.div`
	width: 100%;
	margin-top: 20px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export const timeFont = styled(Typography)`
	width: 25%;
`;

export const timeInput = styled(Input)`
	width: 30%;
	margin: 0 2%;
`;
