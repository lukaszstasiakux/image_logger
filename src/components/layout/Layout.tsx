import React, { FC, useState } from "react";
import styled from "styled-components";
import { defaultState, LayoutContext } from "../../context/Context";
import Workspace from '../workspace/Workspace';
import Sidebar from "../sidebar/Sidebar";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Layout: FC = () => {
  const [layoutMode, setLayout] = useState(defaultState.layoutMode);
  return (
    <LayoutContext.Provider value={{ layoutMode, setLayout:(e)=>setLayout(e) }}>
      <Main>
        <Workspace/>
        <Sidebar />
      </Main>
    </LayoutContext.Provider>
  );
};

export default Layout;
