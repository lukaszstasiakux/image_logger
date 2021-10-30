import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Alignment, SidebarHeader, SidebarSection } from "../common/Common";
import DataContext from "../workspace/DataContext";
import TagItem from "./tags/TagItem";
import SelectedTagItem from "./tags/SelectedTagItem";
import { getTagById } from "../workspace/tagsHelper";
import Tagged from "../workspace/Tagged";

const WrapperTagList = styled.div`
  margin: 1rem 0;
	width:100%;
`;

const TagList: FC = () => {
  const { data } = useContext(DataContext);
	const {tags} = data;
  const [selectedTag, toogleSelected] = useState('');
  const toogleSeletion = (id: string) => {
		const value = selectedTag === id ? '' : id 
    toogleSelected(value);
  };

  return (
    <WrapperTagList>
      {selectedTag && (
        <SidebarSection>
          <SidebarHeader>Selected tag</SidebarHeader>
          <SelectedTagItem tag={getTagById(selectedTag, tags)!} />
        </SidebarSection>
      )}

      <Alignment vertical="flex-start" horizontal="flex-start">
        {tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} onClick={toogleSeletion} />
        ))}
      </Alignment>
    </WrapperTagList>
  );
};

export default TagList;
