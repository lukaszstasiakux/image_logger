import React, { FC } from "react";
import Section from "../layout/Section";
import { Alignment, SectionHeader } from "../common/Common";
import PhotoArea from './PhotoArea';

interface TaggedProps {
  mode: string;
	hasTags:boolean;
}

const Tagged: FC<TaggedProps> = ({ mode,hasTags }) => {
  

  return (
    <Section mode={mode}>
      <SectionHeader>
        Tagged section
        <Alignment>button</Alignment>
      </SectionHeader>
      <PhotoArea mode={mode} hasTags={hasTags}/>
    </Section>
  );
};

export default Tagged;
