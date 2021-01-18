import React, { useEffect, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as workActions from 'stores/work';
import * as timeActions from 'stores/time';
import * as userActions from 'stores/user';

import { AdminWorkContainer } from 'container';
import { Loading, Error } from 'components';
import {
	getQueryStringObject,
	getBeforeMonthQuery,
	getAfterMonthQuery,
} from 'utils';

export default function AdminWorkPage() {
	const { works, tags, users, created, updated } = useSelector((state) => ({
		works: state?.work?.toJS().works,
		tags: state?.time?.toJS().tags,
		users: state?.user?.toJS().users,
		created: state?.work?.toJS().created,
		updated: state?.work?.toJS().updated,
	}));

	const location = useLocation();
	const dispatch = useDispatch();
	const queryString = location.search;
	const query = getQueryStringObject(queryString);

	const {
		onGetWorks,
		onGetBeforeWorks,
		onGetAfterWorks,
	} = bindActionCreators(workActions, dispatch);
	const { onGetCategories } = bindActionCreators(timeActions, dispatch);
	const { onGetUsers } = bindActionCreators(userActions, dispatch);

	const beforeQuery = useMemo(() => getBeforeMonthQuery(query), [
		queryString,
	]);
	const afterQuery = useMemo(() => getAfterMonthQuery(query), [queryString]);

	useEffect(() => {
		onGetCategories();
		onGetUsers();
	}, []);

	useEffect(() => {
		if (!queryString) return null;

		onGetBeforeWorks(beforeQuery);
		onGetAfterWorks(afterQuery);
	}, [queryString]);

	useEffect(() => {
		if (!created?.done && !updated?.done) return null;

		onGetWorks(query);
	}, [created?.done, updated?.done]);

	const loading = tags?.loading || users?.loading;
	const error = works?.error || tags?.error || users?.error;

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />

			<AdminWorkContainer />
		</>
	);
}
