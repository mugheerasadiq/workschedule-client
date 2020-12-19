import React from 'react';

import { useSelector } from 'react-redux';

import { Loading } from 'components';
import { AuthLoginContainer } from 'container';

export default function AuthLoginPage() {
	const { loading } = useSelector(
		(state) => state?.auth?.toJS().login.loading,
	);

	return (
		<>
			<Loading loading={loading} />

			<AuthLoginContainer />
		</>
	);
}
