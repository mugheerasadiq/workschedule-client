import React from 'react';

import { useSelector } from 'react-redux';

import { Loading } from 'components';
import { AuthRegisterContainer } from 'container';

export default function AuthRegisterPage() {
	const { loading } = useSelector(
		(state) => state?.auth?.toJS().register.loading,
	);

	return (
		<>
			<Loading loading={loading} />

			<AuthRegisterContainer />
		</>
	);
}
