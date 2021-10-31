import React, { FC, useContext } from "react";
import { Alignment } from "../../common/Common";
import DataContext from "../../workspace/DataContext";
import SelectedPhotoContext from "../../workspace/SelectedPhotoContext";
import PhotoDetails from "./PhotoDetails";
import PhotoTags from "./PhotoTags";
import AvailableTags from "./AvailableTags";
import { getPhotoById, updatePhotoTags } from "../photo/photosHelper";
import AddTag from "../AddTag";
import {
  changePhotoTag,
  getAvailableTagsForPhoto,
  getUsedTagsByPhoto,
} from "../../workspace/tagsHelper";

const SelectedPhoto: FC = () => {
  const { data, updateData } = useContext(DataContext);
  const { photoId } = useContext(SelectedPhotoContext);
  const { tags, photos } = data;
  const selectedPhoto = getPhotoById(photoId, photos)!;

  const toggleTag = (tagId: string) => {
    const photoTags = changePhotoTag(tagId, selectedPhoto.tags);
		const photoUpdate = updatePhotoTags(photoId,photoTags,photos);

		//@ts-ignore
		updateData({
			...data,
			photos: photoUpdate,
		});
  };
  return (
    <Alignment direction="column" vertical="flex-start">
      <PhotoDetails url={selectedPhoto.url} author={selectedPhoto.author} />
      <PhotoTags
        onClick={toggleTag}
        tags={getUsedTagsByPhoto(tags, selectedPhoto.tags)}
      />
      <AvailableTags
        onClick={toggleTag}
        tags={getAvailableTagsForPhoto(tags, selectedPhoto.tags)}
      />
      <AddTag />
    </Alignment>
  );
};

export default SelectedPhoto;
