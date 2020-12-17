import React from 'react';
import styled from 'styled-components';

import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
	AuthLoginPage,
	AuthRegisterPage,
	CreateWorkPage,
	WorkPage,
	AdminTimePage,
} from 'pages';

import { PcLayout } from 'ui';

export default function App() {
	const { role } = useSelector((state) => state?.user?.toJS().logined?.user);

	const PrivateRoute = ({ Component, path }) => {
		return (
			<Route
				exact
				path={path}
				render={() => {
					const isAuthenticated = role && role === 'admin';
					return isAuthenticated ? (
						<Component />
					) : (
						<Redirect to="/auth/login" />
					);
				}}
			/>
		);
	};

	return (
		<LayoutView>
			<Layout>
				<Switch>
					<Route path="/auth/register" component={AuthRegisterPage} />
					<Route path="/auth/login" component={AuthLoginPage} />
					<Route path="/work" component={WorkPage} />
					<Route
						exact
						path="/"
						render={() => <Redirect to="/auth/login" />}
					/>
					<PcLayout>
						<PrivateRoute
							Component={AdminTimePage}
							path="/admin/time"
						/>
					</PcLayout>
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
