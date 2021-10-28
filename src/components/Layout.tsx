import React, { FC } from "react";
import styled from "styled-components";
import Theme from '../utils/Theme';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
	background-color: ${Theme.backgroundColor};
`;

const Layout: FC = () => {
  return <Main>Main layout</Main>;
};

export default Layout;
