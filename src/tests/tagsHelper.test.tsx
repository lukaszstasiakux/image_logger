import { defineColor } from "../components/workspace/tagsHelper";

describe("tagsHelper", () => {
  describe("defineColor", () => {
    const colors = ["#33970c", "#831422"];
    it("empty tags, should return #33970c", () => {
      const tags = [];
      const color = defineColor(tags, colors);
      const expected = "#33970c";
      expect(color).toEqual(expected);
    });
    it("should return #831422", () => {
      const tags = [{ id: "01", name: "Tag 1", color: "#33970c" }];
      const color = defineColor(tags, colors);
      const expected = "#831422";
      expect(color).toEqual(expected);
    });
    it("should return #33970c", () => {
      const tags = [{ id: "01", name: "Tag 1", color: "#445566" }];
      const color = defineColor(tags, colors);
      const expected = "#33970c";
      expect(color).toEqual(expected);
    });
    it("should return #00ff00", () => {
      const tags = [
        { id: "01", name: "Tag 1", color: "#33970c" },
        { id: "02", name: "Tag 2", color: "#831422" },
      ];
      const color = defineColor(tags, colors);
      const expected = "#00ff00";
      expect(color).toEqual(expected);
    });
  });
});
