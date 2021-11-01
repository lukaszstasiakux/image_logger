import { PhotoDataProps } from "../../workspace/workspaceHelper";

export const getPhotoById = (
  id: string,
  photos: PhotoDataProps[]
): PhotoDataProps | undefined => {
  return photos.find((photo) => photo.id === id);
};

export const updatePhotoTags = (
  photoId: string,
  tags: string[],
  photos: PhotoDataProps[]
): PhotoDataProps[] => {
  photos.forEach((photo) => {
    if (photo.id === photoId) {
      photo.tags = tags;
    }
  });
  return photos;
};

export const getFilteredPhotos = (
  filters: string[],
  photos: PhotoDataProps[]
): PhotoDataProps[] => {
  if (filters.length === 0) {
    return photos;
  }
  const filtered = photos.filter((photo) => {
    const checkTag = filters.every((filter) => photo.tags.includes(filter));
		return checkTag
  });
  return filtered;
};
