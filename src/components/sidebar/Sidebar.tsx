import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../utils/Theme";

const WrapperSidebar = styled.div`
  width: 30rem;
  background-color: ${Colors.darkGray};
`;

const Sidebar: FC = () => {
  return <WrapperSidebar>sidebar</WrapperSidebar>;
};

export default Sidebar;
