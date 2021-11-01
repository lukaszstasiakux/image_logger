import {
  updateTags,
  defineColor,
  deleteTag,
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
  describe("updateTags", () => {
    const mockPhotoTags = ["tag_01", "tag_02"];
    it("should be [tag_01,tag_02, tag_03]", () => {
      const addedTag = "tag_03";
      const result = updateTags(addedTag, mockPhotoTags);
      const expected = ["tag_01", "tag_02", "tag_03"];
      expect(result).toEqual(expected);
    });
    it("should be [tag_01]", () => {
      const addedTag = "tag_02";
      const result = updateTags(addedTag, mockPhotoTags);
      const expected = ["tag_01"];
      expect(result).toEqual(expected);
    });
  });

  describe("deleteTag", () => {
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
    ];
    it("one photo have deleted tag", () => {
      const tagId = "tag_01";
      const mockPhotos = [
        {
          id: "photo_01",
          tags: ["tag_01"],
          author: "Henryk Sienkiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_02",
          tags: [],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_03",
          tags: [],
          author: "Boleslaw Prus",
          url: "www.img.url",
        },
      ];
      const result = deleteTag(tagId, mockTags, mockPhotos);
      const expected = {
        tags: [
          {
            id: "tag_02",
            name: "tag 2",
            color: "#ffffff",
          },
        ],
        photos: [
          {
            id: "photo_01",
            tags: [],
            author: "Henryk Sienkiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_02",
            tags: [],
            author: "Adam Mickiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_03",
            tags: [],
            author: "Boleslaw Prus",
            url: "www.img.url",
          },
        ],
      };
      expect(result).toEqual(expected);
    });

    it("more photos have deleted tag", () => {
      const tagId = "tag_01";
      const mockPhotos = [
        {
          id: "photo_01",
          tags: ["tag_01"],
          author: "Henryk Sienkiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_02",
          tags: ["tag_01"],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_03",
          tags: [],
          author: "Boleslaw Prus",
          url: "www.img.url",
        },
      ];
      const result = deleteTag(tagId, mockTags, mockPhotos);
      const expected = {
        tags: [
          {
            id: "tag_02",
            name: "tag 2",
            color: "#ffffff",
          },
        ],
        photos: [
          {
            id: "photo_01",
            tags: [],
            author: "Henryk Sienkiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_02",
            tags: [],
            author: "Adam Mickiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_03",
            tags: [],
            author: "Boleslaw Prus",
            url: "www.img.url",
          },
        ],
      };
      expect(result).toEqual(expected);
    });

    it("one photo have deleted tag and other", () => {
      const tagId = "tag_01";
      const mockPhotos = [
        {
          id: "photo_01",
          tags: ["tag_01", "tag_02"],
          author: "Henryk Sienkiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_02",
          tags: [],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_03",
          tags: [],
          author: "Boleslaw Prus",
          url: "www.img.url",
        },
      ];
      const result = deleteTag(tagId, mockTags, mockPhotos);
      const expected = {
        tags: [
          {
            id: "tag_02",
            name: "tag 2",
            color: "#ffffff",
          },
        ],
        photos: [
          {
            id: "photo_01",
            tags: ["tag_02"],
            author: "Henryk Sienkiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_02",
            tags: [],
            author: "Adam Mickiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_03",
            tags: [],
            author: "Boleslaw Prus",
            url: "www.img.url",
          },
        ],
      };
      expect(result).toEqual(expected);
    });

    it("more photos have deleted tag and other", () => {
      const tagId = "tag_01";
      const mockPhotos = [
        {
          id: "photo_01",
          tags: ["tag_01", "tag_02"],
          author: "Henryk Sienkiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_02",
          tags: ["tag_01", "tag_02"],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_03",
          tags: ["tag_01"],
          author: "Boleslaw Prus",
          url: "www.img.url",
        },
      ];
      const result = deleteTag(tagId, mockTags, mockPhotos);
      const expected = {
        tags: [
          {
            id: "tag_02",
            name: "tag 2",
            color: "#ffffff",
          },
        ],
        photos: [
          {
            id: "photo_01",
            tags: ["tag_02"],
            author: "Henryk Sienkiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_02",
            tags: ["tag_02"],
            author: "Adam Mickiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_03",
            tags: [],
            author: "Boleslaw Prus",
            url: "www.img.url",
          },
        ],
      };
      expect(result).toEqual(expected);
    });

    it("anyone photo have't deleted tag", () => {
      const tagId = "tag_01";
      const mockPhotos = [
        {
          id: "photo_01",
          tags: ["tag_02"],
          author: "Henryk Sienkiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_02",
          tags: ["tag_02"],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_03",
          tags: [],
          author: "Boleslaw Prus",
          url: "www.img.url",
        },
      ];
      const result = deleteTag(tagId, mockTags, mockPhotos);
      const expected = {
        tags: [
          {
            id: "tag_02",
            name: "tag 2",
            color: "#ffffff",
          },
        ],
        photos: [
          {
            id: "photo_01",
            tags: ["tag_02"],
            author: "Henryk Sienkiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_02",
            tags: ["tag_02"],
            author: "Adam Mickiewicz",
            url: "www.img.url",
          },
          {
            id: "photo_03",
            tags: [],
            author: "Boleslaw Prus",
            url: "www.img.url",
          },
        ],
      };
      expect(result).toEqual(expected);
    });
  });
});
