import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { defaultState, LayoutContext } from "../../context/Context";
import Workspace from "../workspace/Workspace";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { prepareData } from "../workspace/workspaceHelper";
import { DataContext, defaultData } from "../workspace/DataContext";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Layout: FC = () => {
  const [layoutMode, setLayout] = useState(defaultState.layoutMode);
  const [data, updateData] = useState(defaultData);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => {
        if (res.data) {
          console.log(res.data)
          const photoList = prepareData(res.data);
          updateData({
            ...data,
            photos:photoList
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <LayoutContext.Provider
      value={{ layoutMode, setLayout: (e) => setLayout(e) }}
    >
      <Main>
        <DataContext.Provider value={data}>
          <Workspace />
          <Sidebar />
        </DataContext.Provider>
      </Main>
    </LayoutContext.Provider>
  );
};

export default Layout;
