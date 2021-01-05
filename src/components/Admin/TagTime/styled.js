import styled from 'styled-components';
import { Input, Typography } from 'antd';

export const TimeWrapper = styled.div`
	width: 100%;
	margin-top: 20px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export const TimeFont = styled(Typography)`
	width: 25%;
`;

export const TimeInput = styled(Input)`
	width: 30%;
	margin: 0 2%;
`;
