import styled from 'styled-components';
import 'antd.css';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const TagList = styled.div`
	width: 100%;
	margin-left: 100px;

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

export const TagItem = styled.div`
	width: 100%;
	height: 60px;

	padding: 20px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;

	position: relative;

	font-size: 20px;

	border-bottom: 1px solid #ddd;

	&:hover ${DeleteButton} {
		visibility: visible;
	}
`;

export const ItemGroup = styled.div`
	width: 20%;

	font-size: 24px;
`;

export const ItemTime = styled.div`
	width: 50%;

	font-size: 20px;
`;
