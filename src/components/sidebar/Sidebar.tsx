import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../utils/Theme";

const WrapperSidebar = styled.div`
  width: 30rem;
  background-color: ${Colors.darkGray};
  border-left: 0.2rem solid ${Colors.nearBlack};
`;

const Sidebar: FC = () => {
  return <WrapperSidebar>sidebar</WrapperSidebar>;
};

export default Sidebar;
