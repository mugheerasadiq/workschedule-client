import React, { useEffect } from 'react';
import * as styled from './styled';

const column = [
	{
		key: 'name',
		dataIndex: 'name',
		title: '이름',
		align: 'center',
	},
];

export default function TimeTable({
	dataSource = [],
	beforeSource = [],
	afterSource = [],
}) {
	const dataColumn = [...column];

	return (
		<styled.TimeTableWrapper>
			<styled.TimeTable
				columns={dataColumn}
				dataSource={dataSource}
				pagination={false}
				scroll={{ y: 300 }}
			/>
		</styled.TimeTableWrapper>
	);
}
