import React, { FC } from "react";
import styled from "styled-components";
import { OptionArea, OptionLabel, TagColor } from "../../common/Common";
import { TagsDataProps } from "../../workspace/tagsHelper";

const WrapperTagItem = styled(OptionArea)`
  margin: 0.2rem;
`;
const SelectedOptionLabel = styled(OptionLabel)`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 20rem;
  overflow: hidden;
`;

interface TagItemProps {
  tag: TagsDataProps;
  onClick?: any;
}

const TagItem: FC<TagItemProps> = ({ tag, onClick }) => {
  return (
    <WrapperTagItem onClick={() => onClick(tag.id)}>
      <TagColor color={tag.color} />
      <SelectedOptionLabel>{tag.name}</SelectedOptionLabel>
    </WrapperTagItem>
  );
};

export default TagItem;
