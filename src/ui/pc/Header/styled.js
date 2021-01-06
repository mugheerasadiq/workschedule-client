import styled from 'styled-components';
import { Layout, Popconfirm, Typography } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';
import 'antd.css';

import { Link } from 'react-router-dom';

const { Header } = Layout;

export const LayoutWrapper = styled(Layout)``;

export const PcHeader = styled(Header)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	position: relative;

	padding: 0 30px !important;
`;

export const PcLogo = styled(Link)`
	font-size: 27px;
	font-weight: bold;
	font-family: 'S-CoreDream-3Light';

	color: white;
`;

export const IconButton = styled(Popconfirm)``;

export const UserName = styled(Typography)`
	position: absolute;
	right: 60px;

	color: white;
`;

export const ConfirmAlert = styled.a``;

export const LogoutIcon = styled(UserDeleteOutlined)`
	font-size: 20px;
	font-weight: bold;
	font-family: 'S-CoreDream-3Light';
	color: white;
`;
