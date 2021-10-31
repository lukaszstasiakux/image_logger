import {
  changePhotoTag,
  defineColor,
  getAvailableTagsForPhoto,
  getUsedTagsByPhoto,
} from "../components/workspace/tagsHelper";

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
  describe("getUsedTagsByPhoto", () => {
    const mockTags = [
      {
        id: "tag_01",
        name: "tag 1",
        color: "#ffffff",
      },
      {
        id: "tag_02",
        name: "tag 2",
        color: "#ffffff",
      },
      {
        id: "tag_03",
        name: "tag 3",
        color: "#ffffff",
      },
    ];
    it("should be [tag_02]", () => {
      const mockPhotoTags = ["tag_02"];
      const tags = getUsedTagsByPhoto(mockTags, mockPhotoTags);
      const expected = [
        {
          id: "tag_02",
          name: "tag 2",
          color: "#ffffff",
        },
      ];
      expect(tags).toEqual(expected);
    });
    it("should be []", () => {
      const mockPhotoTags = [];
      const tags = getUsedTagsByPhoto(mockTags, mockPhotoTags);
      const expected = [];
      expect(tags).toEqual(expected);
    });
    it("should be [tag_01, tag_02, tag_03]", () => {
      const mockPhotoTags = ["tag_01", "tag_02", "tag_03"];
      const tags = getUsedTagsByPhoto(mockTags, mockPhotoTags);
      const expected = [...mockTags];
      expect(tags).toEqual(expected);
    });
    it("empty tag list, photo have tags", () => {
      const emptyTagList = [];
      const mockPhotoTags = ["tag_01", "tag_02", "tag_03"];
      const tags = getUsedTagsByPhoto(emptyTagList, mockPhotoTags);
      const expected = [];
      expect(tags).toEqual(expected);
    });
    it("empty tag list, empty photo tag list", () => {
      const emptyTagList = [];
      const mockPhotoTags = [];
      const tags = getUsedTagsByPhoto(emptyTagList, mockPhotoTags);
      const expected = [];
      expect(tags).toEqual(expected);
    });
  });

  describe("getAvailableTagsForPhoto", () => {
    const mockTags = [
      {
        id: "tag_01",
        name: "tag 1",
        color: "#ffffff",
      },
      {
        id: "tag_02",
        name: "tag 2",
        color: "#ffffff",
      },
      {
        id: "tag_03",
        name: "tag 3",
        color: "#ffffff",
      },
    ];
    it("should be [tag_01, tag_03]", () => {
      const mockPhotoTags = ["tag_02"];
      const tags = getAvailableTagsForPhoto(mockTags, mockPhotoTags);
      const expected = [
        {
          id: "tag_01",
          name: "tag 1",
          color: "#ffffff",
        },
        {
          id: "tag_03",
          name: "tag 3",
          color: "#ffffff",
        },
      ];
      expect(tags).toEqual(expected);
    });
    it("should be [tag_01, tag_02, tag_03]", () => {
      const mockPhotoTags = [];
      const tags = getAvailableTagsForPhoto(mockTags, mockPhotoTags);
      const expected = [...mockTags];
      expect(tags).toEqual(expected);
    });
    it("should be []", () => {
      const mockPhotoTags = ["tag_01", "tag_02", "tag_03"];
      const tags = getAvailableTagsForPhoto(mockTags, mockPhotoTags);
      const expected = [];
      expect(tags).toEqual(expected);
    });
    it("empty tag list, photo have tags", () => {
      const emptyTagList = [];
      const mockPhotoTags = ["tag_01", "tag_02", "tag_03"];
      const tags = getAvailableTagsForPhoto(emptyTagList, mockPhotoTags);
      const expected = [];
      expect(tags).toEqual(expected);
    });
    it("empty tag list, empty photo tag list", () => {
      const emptyTagList = [];
      const mockPhotoTags = [];
      const tags = getAvailableTagsForPhoto(emptyTagList, mockPhotoTags);
      const expected = [];
      expect(tags).toEqual(expected);
    });
  });
  describe("changePhotoTag", () => {
    const mockPhotoTags = ["tag_01", "tag_02"];
    it("should be [tag_01,tag_02, tag_03]", () => {
      const addedTag = "tag_03";
      const result = changePhotoTag(addedTag, mockPhotoTags);
      const expected = ["tag_01", "tag_02", "tag_03"];
      expect(result).toEqual(expected);
    });
    it("should be [tag_01]", () => {
      const addedTag = "tag_02";
      const result = changePhotoTag(addedTag, mockPhotoTags);
      const expected = ["tag_01"];
      expect(result).toEqual(expected);
    });
  });
});
