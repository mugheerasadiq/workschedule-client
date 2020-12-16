import React from 'react';
import { Link } from 'react-router-dom';
import * as styled from './styled';

import {
	TeamOutlined,
	ProfileOutlined,
	TagsOutlined,
	ScheduleOutlined,
} from '@ant-design/icons';

export default function PcLayout({ children }) {
	return (
		<>
			<styled.LayoutWrapper>
				<styled.PcHeader className="Header" />
			</styled.LayoutWrapper>
			<styled.LayoutWrapper>
				<styled.PcSider className="site-layout-background">
					<styled.PcMenu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
					>
						<styled.PcSubMenu
							icon={<ScheduleOutlined />}
							title="스케쥴"
						>
							<styled.PcItem key="1">
								<Link to="/admin">조회</Link>
							</styled.PcItem>
							<styled.PcItem key="2">
								<Link to="/admin/work/create">생성</Link>
							</styled.PcItem>
							<styled.PcItem key="3">
								<Link to="/admin/work/delete">삭제</Link>
							</styled.PcItem>
						</styled.PcSubMenu>
						<styled.PcSubMenu icon={<TeamOutlined />} title="사원">
							<styled.PcItem key="4">
								<Link to="/admin/user/view">
									사원리스트 조회
								</Link>
							</styled.PcItem>
							<styled.PcItem key="5">
								<Link to="/admin/user/confirm">유저 승인</Link>
							</styled.PcItem>
						</styled.PcSubMenu>
						<styled.PcSubMenu
							icon={<ProfileOutlined />}
							title="시간대"
						>
							<styled.PcItem key="6">
								<Link to="/admin/category">조회</Link>
							</styled.PcItem>
							<styled.PcItem key="7">
								<Link to="/admin/category/create">생성</Link>
							</styled.PcItem>
							<styled.PcItem key="8">
								<Link to="/admin/category/delete">삭제</Link>
							</styled.PcItem>
						</styled.PcSubMenu>
						<styled.PcSubMenu
							icon={<TagsOutlined />}
							title="상세 시간대"
						>
							<styled.PcItem key="9">
								<Link to="/admin/tag/">조회</Link>
							</styled.PcItem>
							<styled.PcItem key="10">
								<Link to="/admin/tag/create">생성</Link>
							</styled.PcItem>
							<styled.PcItem key="11">
								<Link to="/admin/tag/delete">삭제</Link>
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
