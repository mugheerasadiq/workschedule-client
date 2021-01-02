import styled, { css } from 'styled-components';
import { Layout, Menu, Popconfirm } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';
import 'antd.css';

import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

export const LayoutWrapper = styled(Layout)`
	${(props) =>
		props.content &&
		css`
			padding: 0 24px 24px;
		`}
`;

export const PcHeader = styled(Header)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	padding: 0 30px !important;
`;

export const LogoutButton = styled(Popconfirm)``;

export const ConfirmAlert = styled.a``;

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

export const PcSider = styled(Sider)`
	width: 200px;
`;

export const PcMenu = styled(Menu)`
	min-height: 100vh;
	border-right: 0;
`;

export const PcSubMenu = styled(SubMenu)``;

export const PcItem = styled(Item)``;

export const PcContent = styled(Content)`
	min-height: 100vh;
	padding: 24px;
	margin: 0;
`;
