import React, { useEffect } from 'react';
import * as styled from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from 'stores/user';

import { Loading, Error } from 'components';

export default function AdminConfirmUserContainer() {
	const dispatch = useDispatch();

	const { onGetUsers } = bindActionCreators(userActions, dispatch);

	const users = useSelector((state) => state?.user?.toJS()?.users);
	const { loading, error } = users;

	useEffect(() => {
		onGetUsers();
	}, []);

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />
			ConfirmUserContainer
		</>
	);
}
