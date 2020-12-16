import React from 'react';
import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';

import {
	AuthLoginPage,
	AuthRegisterPage,
	AdminWorkPage,
	AdminUserPage,
	WorkPage,
	CreateWorkPage,
} from 'pages';

import { PcLayout } from 'ui';

export default function App() {
	return (
		<LayoutView>
			<Layout>
				<Switch>
					<Route exact path="/auth/login" component={AuthLoginPage} />
					<Route
						exact
						path="/auth/register"
						component={AuthRegisterPage}
					/>
					<Route
						exact
						path="/work/create"
						component={CreateWorkPage}
					/>
					<Route exact path="/" component={WorkPage} />
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
