import React from 'react';
import * as styled from './styled';

import { useSelector } from 'react-redux';

import { AdminTimeContainer } from 'container';
import { Error } from 'components';

export default function AdminTimePage() {
	const { loading, error } = useSelector(
		(state) => state?.time?.toJS()?.categories,
	);

	return (
		<>
			<styled.SkeletonList loading={loading} />
			<Error error={error} />

			<AdminTimeContainer />
		</>
	);
}
