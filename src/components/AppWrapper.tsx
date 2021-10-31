import React, { FC } from "react";
import Layout from "./layout/Layout";
import { DataProvider } from "./workspace/DataContext";
import { SelectedPhotoProvider } from "./workspace/SelectedPhotoContext";

const AppWrapper: FC = () => {
  return (
    <DataProvider>
      <SelectedPhotoProvider>
        <Layout />
      </SelectedPhotoProvider>
    </DataProvider>
  );
};

export default AppWrapper;
