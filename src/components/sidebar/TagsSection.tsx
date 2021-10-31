import React, { FC } from "react";
import { Alignment } from "../common/Common";
import AddTag from "./AddTag";
import Tags from "./Tags";

const TagsSection: FC = () => {
  return (
    <Alignment direction="column" vertical="flex-start">
      <AddTag />
      <Tags />
    </Alignment>
  );
};

export default TagsSection;
