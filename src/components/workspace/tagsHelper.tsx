export interface TagsDataProps {
  id: string;
  name: string;
  color: string;
}

export const defineColor = (
  tags: TagsDataProps[],
  colors: string[]
): string => {
  const tagsColor: string[] = [];
  let freshColor = "#00ff00";

  if (tags.length > 0) {
    tags.forEach((tag) => {
      tagsColor.push(tag.color);
    });
  }

  colors.some((color) => {
    const colorCheck = !tagsColor.includes(color);
    if (colorCheck) {
      freshColor = color;
      return freshColor;
    }
    return false;
  });
  return freshColor;
};

export const getTagById = (
  id: string,
  tags: TagsDataProps[]
): TagsDataProps | undefined => {
  return tags.find((tag) => tag.id === id);
};

export const getUsedTagsByPhoto = (
  tags: TagsDataProps[],
  photoTags: string[]
): TagsDataProps[] => {
  const result = tags.filter((tag) => photoTags.includes(tag.id));

  return result;
};

export const getAvailableTagsForPhoto = (
  tags: TagsDataProps[],
  photoTags: string[]
): TagsDataProps[] => {
  const result = tags.filter((tag) => !photoTags.includes(tag.id));
  return result;
};

export const changePhotoTag = (
  tagId: string,
  photoTags: string[]
): string[] => {
	const tags = [...photoTags]
  if (tags.includes(tagId)) {
    const index = tags.indexOf(tagId);
    if (index > -1) {
      tags.splice(index, 1);
    }
  } else {
    tags.push(tagId);
  }
	return tags;
};
