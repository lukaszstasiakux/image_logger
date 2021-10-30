import React, { FC, useContext, useMemo } from "react";
import Section from "../layout/Section";
import { Alignment, SectionHeader } from "../common/Common";
import PhotoArea from "./PhotoArea";
import DataContext from "./DataContext";
import { photosSelector } from "./workspaceHelper";

interface TaggedProps {
  mode: string;
  hasTags: boolean;
}

const Tagged: FC<TaggedProps> = ({ mode, hasTags }) => {
  const { data } = useContext(DataContext);
  const { photos } = data;
  const photoScope = useMemo(() => {
    return photosSelector(photos, hasTags);
  }, [photos, hasTags]);

  return (
    <Section mode={mode}>
      <SectionHeader>
        Tagged pictures ({photoScope.length})<Alignment>button</Alignment>
      </SectionHeader>
      <PhotoArea mode={mode} hasTags={hasTags} photos={photoScope} />
    </Section>
  );
};

export default Tagged;
