import styled from 'styled-components';
import 'antd.css';
import { Button, Input } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

export const CategoryListWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
`;

export const DeleteButton = styled(CloseOutlined)`
	width: 30px;
	height: 30px;
	margin: 20px 5px;
	padding-top: 10px;

	font-size: 20px;

	color: rgba(250, 50, 50, 0.8);

	visibility: hidden;
	position: absolute;
	right: 0;

	z-index: 1;

	cursor: pointer;
`;

export const EditButton = styled(EditOutlined)`
	width: 30px;
	height: 30px;
	margin: 20px 5px;
	padding-top: 10px;

	font-size: 20px;

	color: rgba(150, 100, 50, 0.8);

	visibility: hidden;
	position: absolute;
	right: 40px;

	z-index: 1;

	cursor: pointer;
`;

export const CategoryWrapper = styled.div`
	width: 100%;

	display: flex;
	&:hover ${DeleteButton} {
		visibility: visible;
	}
	&:hover ${EditButton} {
		visibility: visible;
	}
`;

export const CategoryItem = styled.div`
	width: 100%;
	height: 60px;
	padding: 20px 20px;

	font-size: 24px;

	border-bottom: 1px solid #ddd;

	@media (max-width: 375px) {
		font-size: 20px !important;
	}
`;

export const CategoryEditItem = styled(Input)`
	width: 100%;
	height: 60px;

	font-size: 24px;

	background-color: transparent;

	outline: none;
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
