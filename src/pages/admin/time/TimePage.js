import { useSelector } from 'react-redux';

import { AdminTimeContainer } from 'container';
import { Loading, Error } from 'components';

export default function AdminTimePage() {
	const { loading, error } = useSelector(
		(state) => state?.time?.toJS()?.categories,
	);

	return (
		<>
			<Loading loading={loading} />
			<Error error={error} />

			<AdminTimeContainer />
		</>
	);
}
