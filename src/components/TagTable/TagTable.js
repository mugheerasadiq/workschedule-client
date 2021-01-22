import React from 'react';
import * as styled from './styled';

const columns = [
	{
		key: 'name',
		dataIndex: 'name',
		title: '조 이름',
		align: 'center',
	},
	{
		key: 'start',
		dataIndex: 'start',
		title: '시작 시간',
		align: 'center',
	},
	{
		key: 'end',
		dataIndex: 'end',
		title: '끝 시간',
		align: 'center',
	},
	{
		key: 'time',
		dataIndex: 'time',
		title: '근무 시간',
		align: 'center',
	},
];

export default function TagTable({ tagList = [] }) {
	return (
		<styled.TagTableWrapper>
			<styled.TagTable
				rowKey="name"
				columns={columns}
				dataSource={tagList}
				pagination={false}
				scroll={{ y: 300 }}
			/>
		</styled.TagTableWrapper>
	);
}
