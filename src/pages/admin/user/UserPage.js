import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { AdminUserListContainer, AdminConfirmUserContainer } from 'container';

export default function AdminUserPage() {
	return (
		<Switch>
			<Route path="/admin/user/view" component={AdminUserListContainer} />
			<Route
				path="/admin/user/confirm"
				component={AdminConfirmUserContainer}
			/>
		</Switch>
	);
}
