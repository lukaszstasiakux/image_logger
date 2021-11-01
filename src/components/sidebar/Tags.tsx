import React, { FC, Fragment, useContext, useState } from "react";
import {
  Alignment,
  SidebarHeader,
  SidebarSection,
  ActionSidebarHeader,
} from "../common/Common";
import DataContext from "../workspace/DataContext";
import TagsList from "./tags/TagsList";
import SelectedTagItem from "./tags/SelectedTagItem";
import { getTagById } from "../workspace/tagsHelper";

const Tags: FC = () => {
  const { data } = useContext(DataContext);
  const { tags } = data;
  const [selectedTag, toggleSelected] = useState("");
  const toggleSelection = (id: string) => {
    const value = selectedTag === id ? "" : id;
    toggleSelected(value);
  };

  return (
    <Fragment>
      {selectedTag && (
        <SidebarSection>
          <Alignment>
            <SidebarHeader>Selected tag</SidebarHeader>
            <ActionSidebarHeader onClick={() => toggleSelected("")}>
              Clear
            </ActionSidebarHeader>
          </Alignment>
          <SelectedTagItem
            tag={getTagById(selectedTag, tags)!}
            cancelAction={toggleSelection}
          />
        </SidebarSection>
      )}
      <SidebarSection>
        <SidebarHeader>Tags list</SidebarHeader>
        <TagsList onClick={toggleSelection} tags={tags} />
      </SidebarSection>
    </Fragment>
  );
};

export default Tags;
