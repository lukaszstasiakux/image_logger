import React, { FC } from "react";
import { SidebarSection, SidebarHeader } from "../../common/Common";
import { TagsDataProps } from "../../workspace/tagsHelper";
import TagsList from "../tags/TagsList";

interface AvailableTagsProps {
  tags: TagsDataProps[];
  onClick?: any;
}

const AvailableTags: FC<AvailableTagsProps> =({tags, onClick}) => {
	return(
		<SidebarSection>
			<SidebarHeader>Available Tags</SidebarHeader>
			<TagsList onClick={onClick} tags={tags} />
		</SidebarSection>
	)
}

export default AvailableTags;