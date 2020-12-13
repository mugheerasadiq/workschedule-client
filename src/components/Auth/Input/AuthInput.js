import React from 'react';
import * as styled from './styled';

export default function AuthInput({ icon, ...args }) {
	return (
		<styled.AuthInputWrapper>
			<styled.AuthIcon>
				<i className={icon} />
			</styled.AuthIcon>
			<styled.AuthInput {...args} />
		</styled.AuthInputWrapper>
	);
}
