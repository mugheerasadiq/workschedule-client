import React from 'react';
import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';

import {
	AuthLoginPage,
	AuthRegisterPage,
	AdminWorkPage,
	AdminUserPage,
	WorkPage,
} from 'pages';

export default function App() {
	return (
		<LayoutView>
			<Layout>
				<Switch>
					<Route path="/auth/login" component={AuthLoginPage} />
					<Route path="/auth/register" component={AuthRegisterPage} />
					<Route path="/auth" component={AuthLoginPage} />
					<Route path="/admin/work" component={AdminWorkPage} />
					<Route path="/admin/user" component={AdminUserPage} />
					<Route path="/" component={WorkPage} />
				</Switch>
			</Layout>
		</LayoutView>
	);
}

const LayoutView = styled.div`
	width: 100%;
	min-height: 100vh;

	background-color: white;
`;

const Layout = styled.div``;
