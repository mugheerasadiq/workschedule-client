import React, { useEffect } from 'react';
import * as styled from './styled';
import { Table } from 'antd';

const { Column } = Table;

export default function ConfirmUser({
	updated,
	users = [],
	onGetUsers,
	onUpdateUser,
}) {
	const { loading, done } = updated;

	useEffect(() => {
		if (!done) return null;

		onGetUsers();
	}, [done]);

	return (
		<styled.ConfirmUserTable dataSource={users}>
			<Column title="사번" dataIndex="companyId" key="companyId" />
			<Column title="이름" dataIndex="name" key="name" />
			<Column
				title="승인/거부"
				dataIndex="id"
				key="id"
				render={(id) => (
					<TableButtons
						key={id}
						id={id}
						loading={loading}
						onUpdateUser={onUpdateUser}
					/>
				)}
			/>
		</styled.ConfirmUserTable>
	);
}

function TableButtons({ id, loading, onUpdateUser }) {
	return (
		<styled.TableButtonWrapper>
			<styled.TableButton
				size="large"
				loading={loading}
				onClick={() => onUpdateUser({ id, status: 'confirm' })}
			>
				승인
			</styled.TableButton>
			<styled.TableButton
				size="large"
				loading={loading}
				onClick={() => onUpdateUser({ id, status: 'reject' })}
				danger
			>
				거절
			</styled.TableButton>
		</styled.TableButtonWrapper>
	);
}
