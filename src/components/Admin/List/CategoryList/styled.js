import styled from 'styled-components';
import 'antd.css';
import { Input, Button } from 'antd';

export const CategoryListWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
`;

export const CategoryWrapper = styled.div`
	width: 100%;

	display: flex;
`;

export const CategoryItem = styled.div`
	width: 70%;
	height: 60px;
	padding: 20px 20px;

	font-size: 24px;

	border-bottom: 1px solid #ddd;
`;

export const EditCategory = styled.div``;

export const TagViewButton = styled(Button)`
	margin: 20px;
`;
