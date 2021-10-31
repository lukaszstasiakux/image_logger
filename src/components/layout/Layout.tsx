import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { defaultState, LayoutContext } from "../../context/Context";
import Workspace from "../workspace/Workspace";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { prepareData } from "../workspace/workspaceHelper";
import DataContext from "../workspace/DataContext";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Layout: FC = () => {
  const [layoutMode, setLayout] = useState(defaultState.layoutMode);
  const { data, updateData } = useContext(DataContext);
  useEffect(() => {
    if (sessionStorage.getItem("saveData")) {
      const savedData = JSON.parse(sessionStorage.getItem("saveData")!);
      // @ts-ignore
      updateData({
        ...savedData,
      });
    } else {
      axios
        .get("https://picsum.photos/v2/list")
        .then((res) => {
          if (res.data) {
            const photoList = prepareData(res.data);
            // @ts-ignore
            updateData({
              ...data,
              photos: photoList,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <LayoutContext.Provider
      value={{ layoutMode, setLayout: (e) => setLayout(e) }}
    >
      <Main>
        <Workspace />
        <Sidebar />
      </Main>
    </LayoutContext.Provider>
  );
};

export default Layout;
