import React, { FC, useContext, useState } from "react";
import Section from "../layout/Section";
import { SectionHeader } from "../common/Common";
import Filters from "./Filters";
import PhotoArea from "./PhotoArea";
import DataContext from "./DataContext";
import { photosSelector } from "./workspaceHelper";
import { getFilteredPhotos } from "../sidebar/photo/photosHelper";

interface TaggedProps {
  mode: string;
  hasTags: boolean;
}

const Tagged: FC<TaggedProps> = ({ mode, hasTags }) => {
  const [filters, changeFilters] = useState([]);
  const { data } = useContext(DataContext);
  const { photos } = data;
  const photoScope = photosSelector(photos, hasTags);
  const filteredPhotos = getFilteredPhotos(filters, photoScope);

  const isActiveFilter = () => {
    return filters.length > 0;
  };

  return (
    <Section mode={mode}>
      <SectionHeader>
        Tagged pictures ({isActiveFilter() && `${filteredPhotos.length} / `}
        {photoScope.length})
        <Filters
          activeFilters={filters}
          applyFilters={changeFilters}
          isActive={isActiveFilter()}
        />
      </SectionHeader>
      <PhotoArea mode={mode} hasTags={hasTags} photos={filteredPhotos} />
    </Section>
  );
};

export default Tagged;
