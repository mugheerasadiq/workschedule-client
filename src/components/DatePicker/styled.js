import styled from 'styled-components';
import { DatePicker, Button } from 'antd';

export const DatePickerWraper = styled.div`
	display: flex;
	flex-wrap: wrap;

	margin-bottom: 20px;
`;

export const DatePickerToggle = styled(DatePicker)`
	min-width: 200px;
`;

export const DateSearchButton = styled(Button)`
	margin-left: 10px;
`;
