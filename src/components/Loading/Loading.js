import React from 'react';
import * as styled from './styled';

export default function Loading({ loading = false }) {
	if (!loading) return null;

	const AntIcon = <styled.LoadingIcon />;

	return (
		<styled.LoadingWrapper>
			<styled.LoadingSpin indicator={AntIcon} />
		</styled.LoadingWrapper>
	);
}
