import React, { FC } from "react";
import styled from "styled-components";
import {
  Alignment,
  SidebarSection,
  OptionLabel,
	SidebarHeader
} from "../../common/Common";

const WrapperPhotoDetails = styled(Alignment)`
  width: 100%;
`;

const PreviewPhoto = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  margin-bottom: 0.4rem;

  img {
    display: inline-block;
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: 300ms;
  }
`;

interface PhotoDetailsProps {
  url: string;
  author: string;
}

const PhotoDetails: FC<PhotoDetailsProps> = ({ url, author }) => {
  return (
    <SidebarSection>
			<SidebarHeader>Selected Photo</SidebarHeader>
      <WrapperPhotoDetails direction="column" vertical="flex-start">
        <PreviewPhoto>
          <img src={url} alt={author} />
        </PreviewPhoto>
        <OptionLabel>Author: {author}</OptionLabel>
      </WrapperPhotoDetails>
    </SidebarSection>
  );
};

export default PhotoDetails;
