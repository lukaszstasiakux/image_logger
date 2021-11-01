import React, { FC, Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton } from "../../common/Button";
import {
  Alignment,
  OptionArea,
  OptionLabel,
  TagColor,
} from "../../common/Common";
import DataContext from "../../workspace/DataContext";
import {
  countPhotoUsedTag,
  setTagDetails,
  TagsDataProps,
  deleteTag,
} from "../../workspace/tagsHelper";
import TagTemplate from "../TagTemplate";
import Modal from "../../modal/Modal";

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
  cancelAction: any;
}

const SelectedTagItem: FC<SelectedTagItemProps> = ({ tag, cancelAction }) => {
  const { data, updateData } = useContext(DataContext);
  const { tags, photos } = data;
  const [edit, toogleEdit] = useState(false);
  const [showModal, toggleModal] = useState(false);

  useEffect(() => {
    if (edit) {
      toogleEdit(false);
    }
  }, [tag]);

  const deleteAction = () => {
    const update = deleteTag(tag.id, tags, photos);
    //@ts-ignore
    updateData({
      ...update,
    });
    cancelAction("");
  };

  const deleteConfirm = () => {
    toggleModal(true);
  };
  const saveChanges = (name: string, color: string) => {
    const updatedTag = setTagDetails(tag.id, name, color, tags);
    //@ts-ignore
    updateData({
      ...data,
      tags: updatedTag,
    });
    toogleEdit(false);
  };
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
        <Fragment>
          <WrapperTagItem>
            <Alignment>
              <TagColor color={tag.color} />
              <SelectedOptionLabel>{tag.name}</SelectedOptionLabel>
            </Alignment>
            <Alignment>
              <IconButton icon="edit" onClick={() => toogleEdit(true)} />
              <IconButton icon="delete" onClick={() => deleteConfirm()} />
            </Alignment>
          </WrapperTagItem>
          {showModal && (
            <Modal
              cancel={() => toggleModal(false)}
              confirm={() => deleteAction()}
              confirmLabel="Delete"
            >
              <div>You want delete tag: {tag.name}</div>
              <div>
                This tag are used by {countPhotoUsedTag(tag.id, photos)} photos
              </div>
            </Modal>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default SelectedTagItem;
