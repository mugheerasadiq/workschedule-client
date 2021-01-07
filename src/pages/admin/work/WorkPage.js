import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timeActions from 'stores/time';
import * as userActions from 'stores/user';

import { AdminWorkContainer } from 'container';
import { Loading, Error } from 'components';

export default function AdminWorkPage() {
	const { works, tags, users } = useSelector((state) => ({
		works: state?.work?.toJS().works,
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
	}));

	const dispatch = useDispatch();

	const { onGetCategories } = bindActionCreators(timeActions, dispatch);
	const { onGetUsers } = bindActionCreators(userActions, dispatch);

	useEffect(() => {
		onGetCategories();
		onGetUsers();
	}, []);

	const loading = works?.loading || tags?.loading || users?.loading;
	const error = works?.error || tags?.error || users?.error;

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />

			<AdminWorkContainer />
		</>
	);
}
