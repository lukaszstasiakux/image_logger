import {
  getFilteredPhotos,
  updatePhotoTags,
} from "../components/sidebar/photo/photosHelper";

describe("photoHelper", () => {
  describe("updatePhotoTags", () => {
    it("for id=0, add tag 'tag_001'", () => {
      const mockData = [
        {
          id: "0",
          url: "https://picsum.photos/id/0/561/374",
          tags: [],
          author: "Gal Anonim",
        },
        {
          id: "1",
          url: "https://picsum.photos/id/1/361/774",
          tags: ["tag_01"],
          author: "Kuba Sienkiewicz",
        },
      ];
      const photoId = "0";
      const tags = ["tag_001"];
      const result = updatePhotoTags(photoId, tags, mockData);

      const expected = [
        {
          id: "0",
          url: "https://picsum.photos/id/0/561/374",
          tags: ["tag_001"],
          author: "Gal Anonim",
        },
        {
          id: "1",
          url: "https://picsum.photos/id/1/361/774",
          tags: ["tag_01"],
          author: "Kuba Sienkiewicz",
        },
      ];
      expect(result).toEqual(expected);
    });
    it("for id=1, remove tag 'tag_01'", () => {
      const mockData = [
        {
          id: "0",
          url: "https://picsum.photos/id/0/561/374",
          tags: [],
          author: "Gal Anonim",
        },
        {
          id: "1",
          url: "https://picsum.photos/id/1/361/774",
          tags: ["tag_01"],
          author: "Kuba Sienkiewicz",
        },
      ];
      const photoId = "1";
      const tags = [];
      const result = updatePhotoTags(photoId, tags, mockData);
      const expected = [
        {
          id: "0",
          url: "https://picsum.photos/id/0/561/374",
          tags: [],
          author: "Gal Anonim",
        },
        {
          id: "1",
          url: "https://picsum.photos/id/1/361/774",
          tags: [],
          author: "Kuba Sienkiewicz",
        },
      ];
      expect(result).toEqual(expected);
    });
  });
  describe("getFilteredPhotos", () => {
    const mockPhotos = [
      {
        id: "photo_01",
        tags: ["tag_01"],
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
        tags: ["tag_02"],
        author: "Boleslaw Prus",
        url: "www.img.url",
      },
    ];
    it("filters = [tag_01]", () => {
      const filters = ["tag_01"];
      const result = getFilteredPhotos(filters, mockPhotos);
      const expected = [
        {
          id: "photo_01",
          tags: ["tag_01"],
          author: "Henryk Sienkiewicz",
          url: "www.img.url",
        },
        {
          id: "photo_02",
          tags: ["tag_01", "tag_02"],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
      ];
      expect(result).toEqual(expected);
    });
    it("filters = [tag_01, tag_02]", () => {
      const filters = ["tag_01", "tag_02"];
      const result = getFilteredPhotos(filters, mockPhotos);
      const expected = [
        {
          id: "photo_02",
          tags: ["tag_01", "tag_02"],
          author: "Adam Mickiewicz",
          url: "www.img.url",
        },
      ];
      expect(result).toEqual(expected);
    });
    it("filters = [tag_01, tag_02, tag_03]", () => {
      const filters = ["tag_01", "tag_02", "tag_03"];
      const result = getFilteredPhotos(filters, mockPhotos);
      const expected = [];
      expect(result).toEqual(expected);
    });
    it("filters = [tag_03]", () => {
      const filters = ["tag_03"];
      const result = getFilteredPhotos(filters, mockPhotos);
      const expected = [];
      expect(result).toEqual(expected);
    });
    it("filters = []", () => {
      const filters = [];
      const result = getFilteredPhotos(filters, mockPhotos);
      const expected = mockPhotos;
      expect(result).toEqual(expected);
    });
  });
});
