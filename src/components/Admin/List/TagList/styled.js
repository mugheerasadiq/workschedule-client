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

export const TagItem = styled.div`
	width: 100%;
	height: 60px;

	padding: 20px;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	position: relative;

	font-size: 20px;

	border-bottom: 1px solid #ddd;
`;

export const ItemGroup = styled.div`
	width: 20%;

	font-size: 24px;

	cursor: pointer;
`;

export const ItemTime = styled.div`
	width: 50%;

	font-size: 20px;
`;

export const EditButtonWrapper = styled.div`
	position: absolute;
	left: 0;
`;

export const DeleteButton = styled(CloseOutlined)`
	width: 30px;
	height: 30px;
	margin: 20px 5px;
	padding-top: 10px;

	font-size: 20px;

	color: rgba(250, 50, 50, 0.8);

	z-index: 1;
	cursor: pointer;
`;
