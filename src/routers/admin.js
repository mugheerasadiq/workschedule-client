import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { AdminPage } from 'pages';

export default function AdminRouter() {
	const history = useHistory();

	const user = useSelector((state) => state.user?.toJS()?.logined?.user);
	const role = user?.role;

	useEffect(() => {
		if (!user) history.replace('/auth/login');

		if (role !== 'admin') {
			alert('어드민 권한이 없습니다.');
			history.replace('/');
		}
	}, [role]);

	if (!role || role !== 'admin') return null;

	return (
		<Switch>
			<Route path="/admin" component={AdminPage} />
		</Switch>
	);
}
