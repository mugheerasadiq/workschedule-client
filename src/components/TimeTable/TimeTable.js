import React from 'react';
import * as styled from './styled';

export default function TimeTable({ dataColumn = [], timeSource = [] }) {
	return (
		<styled.TimeTableWrapper>
			<styled.TimeTable
				rowKey="name"
				columns={dataColumn}
				dataSource={timeSource}
				pagination={false}
				scroll={{ y: 300 }}
			/>
		</styled.TimeTableWrapper>
	);
}
