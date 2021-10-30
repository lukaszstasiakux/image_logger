import React, { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton } from "../../common/Button";
import {
  Alignment,
  OptionArea,
  OptionLabel,
  TagColor,
} from "../../common/Common";
import { TagsDataProps } from "../../workspace/tagsHelper";
import TagTemplate from "../TagTemplate";

const WrapperTagItem = styled(OptionArea)`
  margin: 0.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SelectedOptionLabel = styled(OptionLabel)`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 15rem;
  overflow: hidden;
`;

interface SelectedTagItemProps {
  tag: TagsDataProps;
}

const SelectedTagItem: FC<SelectedTagItemProps> = ({ tag }) => {
  const [edit, toogleEdit] = useState(false);

  useEffect(() => {
    if (edit) {
      toogleEdit(false);
    }
  }, [tag]);

  const deleteTag = () => {
    console.log("delete");
  };
  const saveChanges = () => {};
  return (
    <Fragment>
      {edit ? (
        <TagTemplate
          confirm={saveChanges}
          value={tag.name}
          color={tag.color}
          cancel={() => toogleEdit(false)}
        />
      ) : (
        <WrapperTagItem>
          <Alignment>
            <TagColor color={tag.color} />
            <SelectedOptionLabel>{tag.name}</SelectedOptionLabel>
          </Alignment>
          <Alignment>
            <IconButton icon="edit" onClick={() => toogleEdit(true)} />
            <IconButton icon="delete" onClick={() => deleteTag()} />
          </Alignment>
        </WrapperTagItem>
      )}
    </Fragment>
  );
};

export default SelectedTagItem;
