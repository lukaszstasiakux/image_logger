import React, { FC, useContext } from "react";
import Section from "../layout/Section";
import LayoutButtons from "../layout/LayoutButtons";
import { SectionHeader } from "../common/Common";
import PhotoArea from "./PhotoArea";
import DataContext from "./DataContext";
import { photosSelector } from "./workspaceHelper";

interface UntaggedProps {
  mode: string;
  hasTags: boolean;
}

const Untagged: FC<UntaggedProps> = ({ mode, hasTags }) => {
  const { data } = useContext(DataContext);
  const { photos } = data;
  const photoScope = photosSelector(photos, hasTags);

  return (
    <Section mode={mode}>
      <SectionHeader>
        Untagged pictures ({photoScope.length})
        <LayoutButtons />
      </SectionHeader>
      <PhotoArea mode={mode} hasTags={hasTags} photos={photoScope} />
    </Section>
  );
};

export default Untagged;
