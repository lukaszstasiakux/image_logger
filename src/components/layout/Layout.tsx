import React, { FC } from "react";
import styled from "styled-components";
import Untagged from "../untagged/Untagged";
import Tagged from "../tagged/Tagged";
import Sidebar from "../sidebar/Sidebar";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const WorkArea = styled.div`
  width: calc(100% - 30rem);
  background-color: #335500;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout: FC = () => {
  return (
    <Main>
      <WorkArea>
        <Untagged />
        <Tagged />
      </WorkArea>
      <Sidebar />
    </Main>
  );
};

export default Layout;
