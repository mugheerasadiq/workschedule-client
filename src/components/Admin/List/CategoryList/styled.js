import styled from 'styled-components';
import 'antd.css';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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
	width: 100%;
	height: 60px;
	padding: 20px 20px;

	font-size: 24px;

	border-bottom: 1px solid #ddd;

	cursor: pointer;
`;

export const EditCategory = styled.div``;

export const TagViewButton = styled(Button)`
	margin: 20px;
`;

export const ListAndButtonWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;

	position: relative;
`;

export const CreateButton = styled(Button)`
	margin: 20px 5px;
	padding-left: 15px;
	padding-right: 15px;

	text-align: center;

	cursor: pointer;
`;

export const CreateButtonWrapper = styled.div`
	position: absolute;

	right: 0;
	bottom: -70px;
`;

export const DeleteButton = styled(CloseOutlined)`
	width: 30px;
	height: 30px;
	margin: 20px 5px;

	font-size: 30px;

	color: rgba(250, 50, 50, 0.8);

	cursor: pointer;
`;
