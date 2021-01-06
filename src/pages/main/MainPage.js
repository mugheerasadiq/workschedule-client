import React from 'react';
import * as styled from './styled';

import { PcHeader } from 'ui';
import { MainContainer } from 'container';

export default function MainPage() {
	return (
		<styled.MainPageWrapper>
			<PcHeader />
			<MainContainer />
		</styled.MainPageWrapper>
	);
}
