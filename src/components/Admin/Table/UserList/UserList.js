import React from 'react';
import * as styled from './styled';

const columns = [
	{
		title: '사번',
		dataIndex: 'companyId',
		key: 'companyId',
	},
	{
		title: '이름',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '역할',
		dataIndex: 'role',
		key: 'role',
	},
];

export default function UserList({ userList = [] }) {
	return <styled.UserListTable columns={columns} dataSource={userList} />;
}
