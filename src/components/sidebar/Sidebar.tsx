import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Theme";
import TagsSection from './TagsSection';

const WrapperSidebar = styled.div`
  width: 30rem;
  background-color: ${colors.darkGray};
`;

const Sidebar: FC = () => {
  return (
    <WrapperSidebar>
      <TagsSection />
    </WrapperSidebar>
  );
};

export default Sidebar;
