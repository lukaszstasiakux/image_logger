import React, { FC, useContext } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Theme";
import SelectedPhotoContext from "../workspace/SelectedPhotoContext";
import TagsSection from "./TagsSection";
import SelectedPhoto from './photo/SelectedPhoto';

const WrapperSidebar = styled.div`
  width: 30rem;
  padding: 0 1rem;
  background-color: ${colors.darkGray};
`;

const Sidebar: FC = () => {
  const { photoId } = useContext(SelectedPhotoContext);
  return (
    <WrapperSidebar>
      {photoId ? <SelectedPhoto /> : <TagsSection />}
    </WrapperSidebar>
  );
};

export default Sidebar;
