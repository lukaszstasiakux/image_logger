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
