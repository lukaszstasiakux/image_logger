import { updatePhotoTags } from "../components/sidebar/photo/photosHelper";

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
      ;
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
});
