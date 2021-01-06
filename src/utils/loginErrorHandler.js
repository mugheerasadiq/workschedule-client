export const loginErrorHandler = (error) => {
	const message = error?.data?.message;

	if (message === 'NotCorrect Password') {
		return '비밀번호가 잘못되었습니다.';
	} else if (message === "Cannot read property 'status' of undefined") {
		return '존재하지 않는 아이디입니다.';
	} else if (message === 'User not confirmed') {
		return '관리자에게 승인을 요청하십시오.';
	}
};
