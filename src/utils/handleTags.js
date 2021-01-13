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
		const { id, name, start, end } = tag;
		const startTime = timeToHHMM(start);
		const endTime = timeToHHMM(end);
		parsedTagList.push({
			id,
			name,
			start: startTime,
			end: endTime,
		});
	});

	return parsedTagList;
};

export const checkYesterdayTag = (table, day, userIndex, tagList) => {
	if (day === 1) return null;

	const yesterday = table[userIndex][day - 1];
	const yesterdayTag = getTagInform(yesterday, tagList);

	const checkedTagList = checkingTag(yesterdayTag, tagList);
	return checkedTagList;
};

export const getTagInform = (tagName, tagList) => {
	const tag = tagList.filter((tag) => {
		return tag.name === tagName;
	});

	const tagInform = { ...tag[0] };

	return tagInform;
};

export const checkingTag = (yesterdayTag, tagList) => {
	const checkedTagList = [];

	tagList.forEach((tag) => {
		checkedTagList.push(compareTime(yesterdayTag.end, tag.start));
	});

	if (!checkedTagList) return tagList;
	else return checkedTagList;
};

export const compareTime = (endTime, startTime) => {
	if (!endTime) return null;

	console.log(endTime, startTime);

	return null;
};
