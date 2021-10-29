import { toogleLayout } from "../components/workspace/workspaceHelper";
import { LAYOUT_MODE, SECTION_MODE } from "../utils/Const";

describe("workspaceHelper", () => {
	describe("toogleLayout", () => {
		it("mode = half => both should be half", () => {
      const mode = LAYOUT_MODE.half
			const heightMode = toogleLayout(mode);
			const expected = {
				tagged: SECTION_MODE.half,
				untagged: SECTION_MODE.half,
			}
      expect(heightMode).toEqual(expected);
    });
		it("mode = full_untagged => tagged should be min, untagged should be max", () => {
      const mode = LAYOUT_MODE.full_untagged
			const heightMode = toogleLayout(mode);
			const expected = {
				tagged: SECTION_MODE.min,
				untagged: SECTION_MODE.max,
			}
      expect(heightMode).toEqual(expected);
    });
		it("mode = full_tagged => tagged should be max, untagged should be min", () => {
      const mode = LAYOUT_MODE.full_tagged
			const heightMode = toogleLayout(mode);
			const expected = {
				tagged: SECTION_MODE.max,
				untagged: SECTION_MODE.min,
			}
      expect(heightMode).toEqual(expected);
    });
		it("mode = undefind => both should be half", () => {
      const mode = undefined;
			const heightMode = toogleLayout(mode);
			const expected = {
				tagged: SECTION_MODE.half,
				untagged: SECTION_MODE.half,
			}
      expect(heightMode).toEqual(expected);
    });
	})
})