import {
  photosSelector,
  prepareData,
  resizeImageUrl,
  toogleLayout,
} from "../components/workspace/workspaceHelper";
import { LAYOUT_MODE, SECTION_MODE } from "../utils/Const";

describe("workspaceHelper", () => {
  describe("toogleLayout", () => {
    it("mode = half => both should be half", () => {
      const mode = LAYOUT_MODE.half;
      const heightMode = toogleLayout(mode);
      const expected = {
        tagged: SECTION_MODE.half,
        untagged: SECTION_MODE.half,
      };
      expect(heightMode).toEqual(expected);
    });
    it("mode = full_untagged => tagged should be min, untagged should be max", () => {
      const mode = LAYOUT_MODE.full_untagged;
      const heightMode = toogleLayout(mode);
      const expected = {
        tagged: SECTION_MODE.min,
        untagged: SECTION_MODE.max,
      };
      expect(heightMode).toEqual(expected);
    });
    it("mode = full_tagged => tagged should be max, untagged should be min", () => {
      const mode = LAYOUT_MODE.full_tagged;
      const heightMode = toogleLayout(mode);
      const expected = {
        tagged: SECTION_MODE.max,
        untagged: SECTION_MODE.min,
      };
      expect(heightMode).toEqual(expected);
    });
    it("mode = undefind => both should be half", () => {
      const mode = undefined;
      const heightMode = toogleLayout(mode);
      const expected = {
        tagged: SECTION_MODE.half,
        untagged: SECTION_MODE.half,
      };
      expect(heightMode).toEqual(expected);
    });
  });
  describe("resizeImageUrl", () => {
    it("should be https://picsum.photos/id/1019/547/364", () => {
      const sourceImg = "https://picsum.photos/id/1019/5472/3648";
      const width = 5472;
      const height = 3648;
      const expected = "https://picsum.photos/id/1019/547/364";
      const newUrl = resizeImageUrl(sourceImg, width, height);
      expect(newUrl).toEqual(expected);
    });
  });
  describe("prepareData", () => {
    it("typical data set", () => {
      const inputData = [
        {
          id: "0",
          author: "Alejandro Escamilla",
          width: 5616,
          height: 3744,
          url: "https://unsplash.com/photos/yC-Yzbqy7PY",
          download_url: "https://picsum.photos/id/0/5616/3744",
        },
        {
          id: "10",
          author: "Paul Jarvis",
          width: 2500,
          height: 1667,
          url: "https://unsplash.com/photos/6J--NXulQCs",
          download_url: "https://picsum.photos/id/10/2500/1667",
        },
      ];
      const newData = prepareData(inputData);
      const expected = [
        {
          id: "0",
          url: "https://picsum.photos/id/0/561/374",
          author: "Alejandro Escamilla",
          tags: [],
        },
        {
          id: "10",
          url: "https://picsum.photos/id/10/250/166",
          author: "Paul Jarvis",
          tags: [],
        },
      ];
      expect(newData).toEqual(expected);
    });
    it("empty data set", () => {
      const inputData = [];
      const newData = prepareData(inputData);
      const expected = [];
      expect(newData).toEqual(expected);
    });
  });
  describe("photosSelector", () => {
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
        tags: ["112"],
        author: "Kuba Sienkiewicz",
      },
      {
        id: "10",
        url: "https://picsum.photos/id/10/250/166",
        tags: [],
        author: "Zygmunt Froid",
      },
    ];
    it("haveTag = true => should be [1]", () => {
      const selected = photosSelector(mockData, true);
      const expected = [
        {
          id: "1",
          url: "https://picsum.photos/id/1/361/774",
          tags: ["112"],
          author: "Kuba Sienkiewicz",
        },
      ];
      expect(selected).toEqual(expected);
    });
    it("haveTag = false => should be [0,10]", () => {
      const selected = photosSelector(mockData, false);
      const expected = [
        {
          id: "0",
          url: "https://picsum.photos/id/0/561/374",
          tags: [],
          author: "Gal Anonim",
        },
        {
          id: "10",
          url: "https://picsum.photos/id/10/250/166",
          tags: [],
          author: "Zygmunt Froid",
        },
      ];
      expect(selected).toEqual(expected);
    });
  });
});
