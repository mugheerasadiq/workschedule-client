import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

// pages
import { AdminGetWorksPage } from './work';
import { AdminTimePage } from './time';

// ui
import { AdminLayout } from 'ui';

export default function AdminPage() {
	const { role } = useSelector((state) => state?.user?.toJS().logined?.user);

	if (role !== 'admin') return <Redirect to="/auth/login" />;

	return (
		<AdminLayout>
			<Switch>
				<Route path="/admin/time" component={AdminTimePage} />
				<Route path="/admin" component={AdminGetWorksPage} />
			</Switch>
		</AdminLayout>
	);
}
