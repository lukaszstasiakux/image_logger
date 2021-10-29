import React, { FC, useContext } from "react";
import styled from "styled-components";
import Untagged from "./Untagged";
import Tagged from "./Tagged";
import { toogleLayout } from "./workspaceHelper";
import { LayoutContext } from "../../context/Context";
import { DataContext } from "./DataContext";

const WrapperWorkspace = styled.div`
  width: calc(100% - 30rem);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Workspace: FC = () => {
	const {layoutMode} = useContext(LayoutContext)
  const heightMode = toogleLayout(layoutMode)
	
  return (
    <WrapperWorkspace>
      <Untagged mode={heightMode.untagged} hasTags={false}/>
      <Tagged mode={heightMode.tagged} hasTags={true}/>
    </WrapperWorkspace>
  );
};

export default Workspace;
