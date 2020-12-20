import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthLoginPage from './login';
import AuthRegisterPage from './register';

export default function AuthPage() {
	return (
		<Switch>
			<Route exact path="/auth/login" component={AuthLoginPage} />
			<Route exact path="/auth/register" component={AuthRegisterPage} />
		</Switch>
	);
}
