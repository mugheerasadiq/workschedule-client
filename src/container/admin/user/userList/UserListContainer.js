import React, { useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from 'stores/user';

import { Loading, Error, UserList } from 'components';

function userData(data = []) {
	let userData = [];

	return userData;
}

export default function AdminUserListContainer() {
	const dispatch = useDispatch();

	const { onGetUsers } = bindActionCreators(userActions, dispatch);

	const users = useSelector((state) => state?.user?.toJS()?.users);
	const { loading, data, error } = users;

	useEffect(() => {
		onGetUsers();
	}, []);

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />

			<styled.UserListWrapper>
				<styled.UserListLogo>사원 리스트</styled.UserListLogo>
				<UserList users={data} />
			</styled.UserListWrapper>
		</>
	);
}
