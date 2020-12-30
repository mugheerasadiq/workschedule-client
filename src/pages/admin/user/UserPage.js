import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { AdminUserListContainer } from 'container';

export default function AdminUserPage() {
	return (
		<Switch>
			<Route path="/admin/user/view" component={AdminUserListContainer} />
		</Switch>
	);
}
