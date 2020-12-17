import React, { useCallback } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from 'stores/user';

import * as styled from './styled';

import {
	TeamOutlined,
	ProfileOutlined,
	ScheduleOutlined,
} from '@ant-design/icons';

const menus = [
	{
		id: '0',
		href: '/admin',
		message: '조회 및 삭제',
	},
	{
		id: '1',
		href: '/admin/work/create',
		message: '생성',
	},
	{
		id: '2',
		href: '/admin/user/view',
		message: '사원리스트 조회',
	},
	{
		id: '3',
		href: '/admin/user/confirm',
		message: '유저 승인',
	},
	{
		id: '4',
		href: '/admin/time',
		message: '조회, 생성 및 삭제',
	},
];

export default function PcLayout({ children }) {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const activedMenu = menus.filter((menu) => {
		return menu?.href === location.pathname;
	});

	const id = activedMenu[0]?.id;

	const { onLogout } = bindActionCreators(userActions, dispatch);

	const onClick = useCallback((e) => {
		onLogout();
		history.push('/auth/login');
	}, []);

	return (
		<>
			<styled.LayoutWrapper>
				<styled.PcHeader className="Header">
					<styled.PcLogo to="/admin">Work Schedule</styled.PcLogo>
					<styled.LogoutButton
						title="로그아웃 하시겠습니까?"
						onConfirm={onClick}
						okText="로그아웃"
						cancelText="취소"
					>
						<styled.ConfirmAlert href="#">
							<styled.LogoutIcon />
						</styled.ConfirmAlert>
					</styled.LogoutButton>
				</styled.PcHeader>
			</styled.LayoutWrapper>
			<styled.LayoutWrapper>
				<styled.PcSider className="site-layout-background">
					<styled.PcMenu
						mode="inline"
						defaultSelectedKeys={id || ['1']}
					>
						<styled.PcSubMenu
							icon={<ScheduleOutlined />}
							title="스케쥴"
						>
							<styled.PcItem key={menus[0].id}>
								<Link to={menus[0].href}>
									{menus[0].message}
								</Link>
							</styled.PcItem>
							<styled.PcItem key={menus[1].id}>
								<Link to={menus[1].href}>
									{menus[1].message}
								</Link>
							</styled.PcItem>
						</styled.PcSubMenu>
						<styled.PcSubMenu icon={<TeamOutlined />} title="사원">
							<styled.PcItem key={menus[2].id}>
								<Link to={menus[2].href}>
									{menus[2].message}
								</Link>
							</styled.PcItem>
							<styled.PcItem key={menus[3].id}>
								<Link to={menus[3].href}>
									{menus[3].message}
								</Link>
							</styled.PcItem>
						</styled.PcSubMenu>
						<styled.PcSubMenu
							icon={<ProfileOutlined />}
							title="시간대"
						>
							<styled.PcItem key={menus[4].id}>
								<Link to={menus[4].href}>
									{menus[4].message}
								</Link>
							</styled.PcItem>
						</styled.PcSubMenu>
					</styled.PcMenu>
				</styled.PcSider>
				<styled.LayoutWrapper content="true">
					<styled.PcContent className="site-layout-background">
						{children}
					</styled.PcContent>
				</styled.LayoutWrapper>
			</styled.LayoutWrapper>
		</>
	);
}
