import { timeToHHMM } from 'utils';

export const renderTagList = (tags = []) => {
	const tagList = [];
	const parsedTagList = [];
	const data = tags?.data;

	for (let category in data) {
		if (data[category] && data[category]?.length > 0) {
			tagList.push(...data[category]);
		}
	}

	tagList.forEach((tag) => {
		const { id, name, start, end, time } = tag;
		const startTime = timeToHHMM(start);
		const endTime = timeToHHMM(end);
		parsedTagList.push({
			id,
			name,
			start: startTime,
			end: endTime,
			time,
		});
	});

	return parsedTagList;
};

export const checkYesterdayTag = (
	table,
	day,
	userIndex,
	tagList,
	beforeSource,
	beforeDay,
) => {
	let yesterday = null;
	if (day === 1) yesterday = beforeSource[userIndex][beforeDay]?.[1];
	else yesterday = table[userIndex][day - 1]?.[1];

	if (!yesterday) return tagList;

	const yesterdayTag = getTagInform(yesterday, tagList);

	const checkedTagList = sortYesterdayTag(yesterdayTag, tagList);
	return checkedTagList;
};

export const getTagInform = (tagName, tagList) => {
	const tag = tagList?.filter((tag) => {
		return tag.name === tagName;
	});

	let tagInform = {};

	if (tag?.length !== 0) {
		tagInform = { ...tag?.[0] };
	}

	return tagInform;
};

export const sortYesterdayTag = (yesterdayTag, tagList) => {
	const checkedTagList = [];
	const compare = (tag) => compareYesterdayTime(yesterdayTag, tag);

	tagList.forEach((tag) => {
		if (!compare(tag)) return null;
		else checkedTagList.push(compare(tag));
	});

	return checkedTagList;
};

export const compareYesterdayTime = (yesterdayTag, tag) => {
	const start = new Date(`2021-01-02 ${tag?.start}`);
	let yesterdayStart = new Date(`2021-01-02 ${yesterdayTag?.start}`);
	let yesterdayEnd = new Date(`2021-01-02 ${yesterdayTag?.end}`);

	if (yesterdayEnd.getHours() - yesterdayStart.getHours() > 0) {
		yesterdayEnd = new Date(`2021-01-01 ${yesterdayTag?.end}`);
	}

	yesterdayEnd.setHours(yesterdayEnd.getHours() + 10);

	if (yesterdayEnd > start) return null;
	else if (start >= yesterdayEnd) return tag;
};

export const checkTomorrowTag = (
	table,
	day,
	userIndex,
	tagList,
	afterSource,
) => {
	const tomorrow = table[userIndex][day + 1]?.[1];
	if (!tomorrow) return tagList; // 함수 만들기

	const tomorrowTag = getTagInform(tomorrow, tagList);
	const checkedTagList = sortTomorrowTag(tomorrowTag, tagList);
	return checkedTagList;
};

export const sortTomorrowTag = (tomorrowTag, tagList) => {
	const checkedTagList = [];
	const compare = (tag) => compareTomorrowTime(tomorrowTag, tag);

	tagList?.forEach((tag) => {
		if (!compare(tag)) return null;
		else checkedTagList.push(compare(tag));
	});

	return checkedTagList;
};

export const compareTomorrowTime = (tomorrowTag, tag) => {
	const start = new Date(`2021-01-02 ${tomorrowTag?.start}`);
	let todayStart = new Date(`2021-01-02 ${tag?.start}`);
	let todayEnd = new Date(`2021-01-02 ${tag?.end}`);

	if (todayEnd.getHours() - todayStart.getHours() > 0) {
		todayEnd = new Date(`2021-01-01 ${tag?.end}`);
	}

	todayEnd.setHours(todayEnd.getHours() + 10);

	if (todayEnd > start) return null;
	else if (start >= todayEnd) return tag;
};
