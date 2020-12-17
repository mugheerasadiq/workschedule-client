import styled from 'styled-components';
import { Layout, Button, Popconfirm } from 'antd';
import { FormOutlined, UserDeleteOutlined } from '@ant-design/icons';
import 'antd.css';

import { Link } from 'react-router-dom';

const { Header } = Layout;

export const LayoutWrapper = styled(Layout)``;

export const PcHeader = styled(Header)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	padding: 0 30px !important;
`;

export const ButtonWrapper = styled.div``;

export const IconButton = styled(Popconfirm)``;

export const ConfirmAlert = styled.a``;

export const AdminIcon = styled(FormOutlined)`
	font-size: 20px;
	color: white;

	margin-right: 20px;
`;

export const LogoutIcon = styled(UserDeleteOutlined)`
	font-size: 20px;
	color: white;
`;

export const PcLogo = styled(Link)`
	font-size: 27px;
	font-weight: bold;
	font-family: 'S-CoreDream-3Light';

	color: white;
`;
