import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'antd';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';

import { DatePicker, Schedule } from 'components';

export default function AdminWorkContainer() {
	const history = useHistory();

	const { works, tags, users } = useSelector((state) => ({
		works: state?.work?.toJS().works,
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
	}));

	// const userData = users?.data || [];

	// const userList = userData.map((user) => {
	// 	return {
	// 		key: user?.id,
	// 		name: user?.name,
	// 	};
	// });

	return (
		<>
			<DatePicker />
			<Schedule users={[]} />
		</>
	);
}
