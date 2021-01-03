import React, { useState, useEffect, useCallback } from 'react';
import * as styled from './styled';

import { getTimeFromTags } from 'utils';

const setTimeInputs = (type = 'start', time) => {
	const hourString = time[`${type}Hour`];
	const minuteString = time[`${type}Minute`];
	if (hourString?.length === 0 || minuteString?.length === 0) return '';

	const timeString = getTimeFromTags(hourString, minuteString);
	return timeString;
};

export default function TagTime({
	startObject = {},
	endObject = {},
	inputs,
	setInputs,
}) {
	const [time, setTime] = useState({
		startHour: startObject?.hours || '',
		startMinute: startObject?.minutes || '',
		endHour: endObject?.hours || '',
		endMinute: endObject?.minutes || '',
	});

	const onChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setTime({
				...time,
				[name]: value,
			});
		},
		[time],
	);

	useEffect(() => {
		const startString = setTimeInputs('start', time);
		const endString = setTimeInputs('end', time);

		setInputs({
			...inputs,
			start: startString,
			end: endString,
		});
	}, [time]);

	return (
		<>
			<styled.TimeWrapper>
				<styled.TimeFont>시작하는 시간</styled.TimeFont>
				<styled.TimeInput
					name="startHour"
					value={time.startHour}
					placeholder="시간을 입력하세요"
					onChange={onChange}
				/>
				시
				<styled.TimeInput
					name="startMinute"
					value={time.startMinute}
					placeholder="분을 입력하세요"
					onChange={onChange}
				/>
				분
			</styled.TimeWrapper>
			<styled.TimeWrapper>
				<styled.TimeFont>끝나는 시간</styled.TimeFont>
				<styled.TimeInput
					name="endHour"
					value={time.endHour}
					placeholder="시간을 입력하세요"
					onChange={onChange}
				/>
				시
				<styled.TimeInput
					name="endMinute"
					value={time.endMinute}
					placeholder="분을 입력하세요"
					onChange={onChange}
				/>
				분
			</styled.TimeWrapper>
		</>
	);
}
