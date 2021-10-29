import { LAYOUT_MODE, SECTION_MODE } from "../../utils/Const";

export const toogleLayout = (mode: string | undefined) => {
	let tagged = SECTION_MODE.half;
	let untagged = SECTION_MODE.half;
	if (mode === LAYOUT_MODE.full_untagged) {
		tagged = SECTION_MODE.min;
		untagged = SECTION_MODE.max;
	} else if (mode === LAYOUT_MODE.full_tagged) {
		tagged = SECTION_MODE.max;
		untagged = SECTION_MODE.min;
	}
	const settings = {
		tagged,
		untagged,
	};
	return settings;
};