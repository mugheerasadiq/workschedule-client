import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loading } from 'components';
import { AuthLoginContainer } from 'container';

export default function AuthLoginPage() {
	const history = useHistory();

	const { loading, loginTime } = useSelector((state) => ({
		loading: state?.auth?.toJS().login.loading,
		loginTime: state?.user?.toJS().logined?.loginTime,
	}));

	useEffect(() => {
		if (loginTime === null) return;

		history.push('/work');
	}, [loginTime]);

	return (
		<>
			<Loading loading={loading} />

			<AuthLoginContainer />
		</>
	);
}
