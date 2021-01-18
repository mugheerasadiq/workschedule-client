import styled, { css } from 'styled-components';
import { Select } from 'antd';

export const TagSelect = styled(Select)`
	width: 50px;

	${(props) =>
		props?.value &&
		css`
			& .ant-select-selector {
				border: 1px solid rgba(50, 150, 255, 0.5) !important;
			}
		`}
`;
