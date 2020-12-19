import React, { useEffect } from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { AuthPage } from 'pages';

export default function AuthRouter() {
	const history = useHistory();

	const user = useSelector((state) => state.user?.toJS()?.logined?.user);
	const role = user?.role;

	useEffect(() => {
		if (role === 'admin') {
			history.replace('/admin');
		} else if (role === 'user') {
			history.replace('/main');
		}
	}, [role]);

	return (
		<Switch>
			<Route path="/auth" component={AuthPage} />
		</Switch>
	);
}
