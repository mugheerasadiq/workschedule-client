import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthLoginPage from './login';
import AuthRegisterPage from './register';

export default function AuthPage() {
	return (
		<Switch>
			<Route to="/auth/login" component={AuthLoginPage} />
			<Route to="/auth/register" component={AuthRegisterPage} />
		</Switch>
	);
}
