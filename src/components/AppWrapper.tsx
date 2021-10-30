import React, { FC } from "react";
import Layout from "./layout/Layout";
import { DataProvider } from "./workspace/DataContext";

const AppWrapper: FC = () => {
  return (
    <DataProvider>
      <Layout />
    </DataProvider>
  );
};

export default AppWrapper;
