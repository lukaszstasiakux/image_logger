import React,{ FC } from "react"
import { Alignment,OptionArea, TagColor,OptionLabel } from "../../common/Common";
import {TagsDataProps} from '../../workspace/tagsHelper';
import styled from "styled-components";

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

export const TagItem: FC<TagItemProps> = ({ tag, onClick }) => {
  return (
    <WrapperTagItem onClick={() => onClick(tag.id)}>
      <TagColor color={tag.color} />
      <SelectedOptionLabel>{tag.name}</SelectedOptionLabel>
    </WrapperTagItem>
  );
};

interface TagListProps {
	tags:TagsDataProps[];
	onClick: any;
}
const TagsList:FC<TagListProps> = ({tags, onClick})=>{
	return (
		<Alignment vertical="flex-start" horizontal="flex-start">
        {tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} onClick={onClick} />
        ))}
      </Alignment>
	)
}

export default TagsList;