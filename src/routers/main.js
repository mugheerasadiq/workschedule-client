import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { MainPage } from 'pages';

export default function MainRouter() {
	const history = useHistory();

	const user = useSelector((state) => state.user?.toJS()?.logined?.user);
	const role = user?.role;

	useEffect(() => {
		if (role === 'user') return;
		history.replace('/auth/login');
	}, [role]);

	return (
		<Switch>
			<Route path="/main" component={MainPage} />
		</Switch>
	);
}
