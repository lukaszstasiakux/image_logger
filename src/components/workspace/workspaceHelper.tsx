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

export const resizeImageUrl = (
  url: string,
  width: number,
  height: number
): string => {
  const splited = url.split("/");
  return `${splited[0]}//${splited[2]}/id/${splited[4]}/${Math.floor(
    width / 10
  )}/${Math.floor(height / 10)}`;
};

export interface IncomingDataProps {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
export interface PhotoDataProps {
  id: string;
  url: string;
  author: string;
  tags: string[];
}

export const prepareData = (data: IncomingDataProps[]): PhotoDataProps[] => {
  const finalData: PhotoDataProps[] = [];
  data.forEach((photo) => {
    finalData.push({
      id: photo.id,
      url: resizeImageUrl(photo.download_url, photo.width, photo.height),
      author: photo.author,
      tags: [],
    });
  });

  return finalData;
};

export const photosSelector = (
  data: PhotoDataProps[],
  haveTags: boolean
): PhotoDataProps[] => {
  const filteredPhotos = data.filter((photo) =>
    haveTags ? photo.tags.length > 0 : photo.tags.length === 0
  );

  return filteredPhotos;
};


