import React, { FC } from "react";
import { SidebarSection, SidebarHeader } from "../../common/Common";
import { TagsDataProps } from "../../workspace/tagsHelper";
import TagsList from "../tags/TagsList";

interface PhotoTagsProps {
  tags: TagsDataProps[];
  onClick?: any;
}

const PhotoTags: FC<PhotoTagsProps> = ({tags, onClick}) => {
  return (
    <SidebarSection>
      <SidebarHeader>Photo Tags</SidebarHeader>
			<TagsList onClick={onClick} tags={tags} />
    </SidebarSection>
  );
};

export default PhotoTags;
