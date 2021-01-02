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

export default function TagTime({ inputs, setInputs }) {
	const [time, setTime] = useState({
		startHour: '',
		startMinute: '',
		endHour: '',
		endMinute: '',
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
			<styled.timeWrapper>
				<styled.timeFont>시작하는 시간</styled.timeFont>
				<styled.timeInput
					name="startHour"
					value={time.startHour}
					placeholder="시간을 입력하세요"
					onChange={onChange}
				/>
				시
				<styled.timeInput
					name="startMinute"
					value={time.startMinute}
					placeholder="분을 입력하세요"
					onChange={onChange}
				/>
				분
			</styled.timeWrapper>
			<styled.timeWrapper>
				<styled.timeFont>끝나는 시간</styled.timeFont>
				<styled.timeInput
					name="endHour"
					value={time.endHour}
					placeholder="시간을 입력하세요"
					onChange={onChange}
				/>
				시
				<styled.timeInput
					name="endMinute"
					value={time.endMinute}
					placeholder="분을 입력하세요"
					onChange={onChange}
				/>
				분
			</styled.timeWrapper>
		</>
	);
}
