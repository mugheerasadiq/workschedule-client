import React from 'react';
import * as styled from './styled';

import { useSelector } from 'react-redux';

import { MainContainer } from 'container';
import { Loading, Error } from 'components';
import { PcHeader } from 'ui';

export default function MainPage() {
	const works = useSelector((state) => state?.work?.toJS().works);

	const { loading, error } = works;

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />

			<styled.MainPageWrapper>
				<PcHeader />
				<MainContainer />
			</styled.MainPageWrapper>
		</>
	);
}
