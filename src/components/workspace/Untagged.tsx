import React, { FC, useContext, useMemo } from "react";
import Section from "../layout/Section";
import LayoutButtons from "../layout/LayoutButtons";
import { SectionHeader } from "../common/Common";
import PhotoArea from './PhotoArea';

interface UntaggedProps {
  mode: string;
	hasTags:boolean;
}

const Untagged: FC<UntaggedProps> = ({ mode,hasTags }) => {
  return (
    <Section mode={mode}>
      <SectionHeader>
        Untagged section
        <LayoutButtons />
      </SectionHeader>
			<PhotoArea mode={mode} hasTags={hasTags}/>
    </Section>
  );
};

export default Untagged;
