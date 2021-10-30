import React, { FC } from "react";
import styled from "styled-components";
import { SECTION_MODE } from "../../utils/Const";
import { colors } from "../../utils/Theme";
import { PhotoDataProps } from "./workspaceHelper";

interface WrapperPhotoProps {
  mode: string;
}
const WrapperPhoto = styled.div<WrapperPhotoProps>`
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
  box-sizing: border-box;
  background-color: ${colors.gray};
  display: flex;
  padding: 0.4rem;
  border: 1px solid ${colors.lightGray};
  transition: 300ms;
	flex-shrink: 0;

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
  return (
    <WrapperPhoto mode={mode}>
      <img src={data.url} alt={data.author} />
    </WrapperPhoto>
  );
};

export default Photo;
