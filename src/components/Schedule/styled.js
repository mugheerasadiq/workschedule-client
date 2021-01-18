import styled from 'styled-components';
import { Table, Input } from 'antd';

export const ScheduleTable = styled(Table)`
	width: 100%;
	height: 50vh;

	& .ant-table-thead > tr > th,
	.ant-table-tbody > tr > td,
	.ant-table tfoot > tr > th,
	.ant-table tfoot > tr > td {
		padding: 12px 2px;
	}
`;

export const ScheduleInput = styled(Input)`
	width: 100%;
	height: 100%;

	padding: 2px;
	text-align: center;

	border: none;
`;
