import styled from 'styled-components';

export const AuthInputWrapper = styled.div`
	margin-top: 20px;
`;

export const AuthIcon = styled.label`
	width: 50px;
	height: 40px;
	padding: 8px 0px 8px 15px;

	display: inline-block;

	color: white;
	background-color: #3a57af;

	border-radius: 4px 0px 0px 4px;
	-webkit-border-radius: 4px 0px 0px 4px;
	-moz-border-radius: 4px 0px 0px 4px;

	box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
	-webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
	-moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
`;

export const AuthInput = styled.input`
	width: calc(100% - 50px);
	height: 40px;

	padding-top: 2.5px;
	padding-left: 15px;

	background-color: #fff;
	border: solid 1px #cbc9c9;

	-webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
	-moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
	border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;

	-webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
	-moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
	box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
`;
