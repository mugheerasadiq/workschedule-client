import styled, { css } from 'styled-components';
import 'antd.css';

import { Layout, Menu } from 'antd';

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

export const PcHeader = styled(Header)``;

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
	padding: 24px;
	margin: 0;
	min-height: 280px;
`;
