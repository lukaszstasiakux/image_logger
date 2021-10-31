import React, { FC, Fragment, useContext, useState } from "react";
import styled from "styled-components";
import { SidebarHeader, SidebarSection } from "../common/Common";
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
          <SidebarHeader>Selected tag</SidebarHeader>
          <SelectedTagItem tag={getTagById(selectedTag, tags)!} />
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
