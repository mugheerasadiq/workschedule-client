import React, { useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from 'stores/user';

import { Loading, Error, ConfirmUser } from 'components';

export default function AdminConfirmUserContainer() {
	const dispatch = useDispatch();

	const { onGetUsers, onUpdateUser } = bindActionCreators(
		userActions,
		dispatch,
	);

	const { users, updated } = useSelector((state) => ({
		users: state?.user?.toJS().users,
		updated: state?.user?.toJS().updated,
	}));
	const { loading, error } = users;

	const userList = users?.data;

	const waitUsers = userList
		.filter((user) => user.status === 'wait')
		.map((user, index) => ({ ...user, key: index }));

	useEffect(() => {
		onGetUsers();
	}, []);

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />

			<styled.ConfirmUserWrapper>
				<styled.ConfirmUserLogo>사원 승인</styled.ConfirmUserLogo>
				<ConfirmUser
					updated={updated}
					users={waitUsers}
					onGetUsers={onGetUsers}
					onUpdateUser={onUpdateUser}
				/>
			</styled.ConfirmUserWrapper>
		</>
	);
}
