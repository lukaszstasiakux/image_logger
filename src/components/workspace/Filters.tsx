import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Theme";
import { IconButton } from "../common/Button";
import {
  ActionSidebarHeader,
  Alignment,
  OptionArea,
  TagColor,
} from "../common/Common";
import Modal from "../modal/Modal";
import DataContext from "./DataContext";
import { updateTags, countPhotoUsedTag, TagsDataProps } from "./tagsHelper";

interface WrapperFilterItemProps {
  active: boolean;
}
const WrapperFilterItem = styled.div<WrapperFilterItemProps>`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  cursor: pointer;
  color: ${(p) => (p.active ? colors.action : colors.nearBlack)};
`;

interface FilterItemProps {
  tag: TagsDataProps;
  count: number;
  onClick: any;
  active: boolean;
}
export const FilterItem: FC<FilterItemProps> = ({
  tag,
  count,
  onClick,
  active,
}) => {
  return (
    <WrapperFilterItem active={active} onClick={() => onClick(tag.id)}>
      <TagColor color={tag.color} />
      {tag.name} ({count})
    </WrapperFilterItem>
  );
};

interface FiltersProps {
  activeFilters: string[];
  applyFilters: any;
  isActive: boolean;
}
const Filters: FC<FiltersProps> = ({
  activeFilters,
  applyFilters,
  isActive,
}) => {
  const [showModal, toggleModal] = useState(false);
  const [filters, toggleFilter] = useState(activeFilters);
  const { data } = useContext(DataContext);
  const { tags, photos } = data;

  const setFilters = (tagId: string) => {
    const newFilter = updateTags(tagId, filters);
    toggleFilter(newFilter);
  };
  const apply = () => {
    applyFilters(filters);
    toggleModal(false);
  };
	const clearFilters = ()=>{
		applyFilters([])
		toggleFilter([])
	}

  return (
    <Alignment>
      {isActive && (
        <ActionSidebarHeader onClick={() => clearFilters()}>
          Clear
        </ActionSidebarHeader>
      )}
      <OptionArea>
        <IconButton
          icon="filter_list"
          onClick={() => toggleModal(true)}
          active={isActive}
        />
        {showModal && (
          <Modal
            cancel={() => toggleModal(false)}
            confirm={() => apply()}
            confirmLabel="Apply"
          >
            <div>Select tag's filter</div>
            {tags.map((tag) => (
              <FilterItem
                tag={tag}
                count={countPhotoUsedTag(tag.id, photos)}
                onClick={setFilters}
                active={filters.includes(tag.id)}
              />
            ))}
          </Modal>
        )}
      </OptionArea>
    </Alignment>
  );
};

export default Filters;
