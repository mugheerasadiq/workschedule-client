import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthLoginContainer } from 'container';

export default function AuthLoginPage() {
	const history = useHistory();

	const { loginTime } = useSelector((state) => state?.user?.toJS().logined);

	useEffect(() => {
		if (loginTime === null) return;

		history.push('/work');
	}, [loginTime]);

	return <AuthLoginContainer />;
}
