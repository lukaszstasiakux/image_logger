import React, { FC, useContext } from "react";
import styled from "styled-components";
import { SECTION_MODE } from "../../utils/Const";
import { colors } from "../../utils/Theme";
import { SmallTagColor } from "../common/Common";
import DataContext from "./DataContext";
import SelectedPhotoContext from "./SelectedPhotoContext";
import { getTagColor } from "./tagsHelper";
import { PhotoDataProps } from "./workspaceHelper";

const WrapperTagsBar = styled.div`
  background-color: ${colors.darkerColor};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  ;
`;

interface TagsBarProps {
  photoTags: string[];
}
export const TagsBar: FC<TagsBarProps> = ({ photoTags }) => {
  const { data } = useContext(DataContext);
  const { tags } = data;
  return (
    <WrapperTagsBar>
      {photoTags.map((tag) => (
        <SmallTagColor color={getTagColor(tag, tags)} key={tag}/>
      ))}
    </WrapperTagsBar>
  );
};

interface WrapperPhotoProps {
  mode: string;
  active: boolean;
}
const WrapperPhoto = styled.div<WrapperPhotoProps>`
  cursor: pointer;
  width: ${(p) =>
    p.mode === SECTION_MODE.max
      ? "25%"
      : p.mode === SECTION_MODE.min
      ? "11rem"
      : "20%"};
  height: ${(p) =>
    p.mode === SECTION_MODE.max
      ? "20rem"
      : p.mode === SECTION_MODE.min
      ? "11rem"
      : "15rem"};
  background-color: ${(p) => (p.active ? colors.selected : colors.gray)};
  display: flex;
  padding: 0.4rem;
  border: 1px solid ${(p) => (p.active ? colors.action : colors.lightGray)};
  transition: 300ms;
  flex-shrink: 0;
  position: relative;

  img {
    display: inline-block;
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: 300ms;
  }
`;

interface PhotoProps {
  data: PhotoDataProps;
  mode: string;
}

const Photo: FC<PhotoProps> = ({ data, mode }) => {
  const { photoId, toggleSelection } = useContext(SelectedPhotoContext);

  const selectPhoto = (id: string) => {
    const value = photoId === id ? "" : id;
    // @ts-ignore
    toggleSelection(value);
  };
  return (
    <WrapperPhoto
      mode={mode}
      active={data.id === photoId}
      onClick={() => selectPhoto(data.id)}
    >
      <img src={data.url} alt={data.author} />
      {data.tags.length > 0 && <TagsBar photoTags={data.tags} />}
    </WrapperPhoto>
  );
};

export default Photo;
