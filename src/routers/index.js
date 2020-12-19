import React from 'react';
import styled from 'styled-components';

import { Route, Switch, Redirect } from 'react-router-dom';

import AdminRouter from './admin';
import MainRouter from './main';
import AuthRouter from './auth';

export default function RootRouter() {
	return (
		<LayoutView>
			<Layout>
				<Switch>
					<Route path="/auth" component={AuthRouter} />
					<Route path="/main" component={MainRouter} />
					<Route path="/admin" component={AdminRouter} />

					<Redirect to="/auth/login" />
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
