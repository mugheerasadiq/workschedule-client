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

	if (!yesterdayTag) return tagList;

	const checkedTagList = checkingTag(yesterdayTag, tagList);
	return checkedTagList;
};

export const getTagInform = (tagName, tagList) => {
	const tag = tagList.filter((tag) => {
		return tag.name === tagName;
	});

	if (tag.length === 0) return null;

	const tagInform = { ...tag[0] };

	return tagInform;
};

export const checkingTag = (yesterdayTag, tagList) => {
	const checkedTagList = [];
	const compare = (tag) => compareTime(yesterdayTag, tag);

	tagList.forEach((tag) => {
		if (!compare(tag)) return null;
		else checkedTagList.push(compare(tag));
	});

	return checkedTagList;
};

export const compareTime = (yesterdayTag, tag) => {
	const start = new Date(`2021-01-02 ${tag.start}`);
	let yesterdayStart = new Date(`2021-01-02 ${yesterdayTag.start}`);
	let yesterdayEnd = new Date(`2021-01-02 ${yesterdayTag.end}`);

	if (yesterdayEnd.getHours() - yesterdayStart.getHours() > 0) {
		yesterdayEnd = new Date(`2021-01-01 ${yesterdayTag.end}`);
	}

	console.log(yesterdayTag.name, yesterdayTag.end, yesterdayEnd);

	yesterdayEnd.setHours(yesterdayEnd.getHours() + 10);

	if (yesterdayEnd > start) return null;
	else if (start >= yesterdayEnd) return tag;
};
