import React, { FC, Fragment, useState, useContext } from "react";
import { FullButton } from "../common/Button";
import DataContext from "../workspace/DataContext";

import TagTemplate from "./TagTemplate";

const AddTag: FC = () => {
  const [showForm, toggleForm] = useState(false);
  const { data, updateData } = useContext(DataContext);
	const {tags} = data;

  const saveTag = (tagName: string, color: string) => {
		if(tagName.length > 0){
			const newTags = [...tags];
			newTags.push({
				id: Date.now().toString(),
				name: tagName,
				color: color,
			});
			// @ts-ignore
			updateData({
				...data,
				tags: newTags,
			});
		}

    toggleForm(false);
  };
  return (
    <Fragment>
      {!showForm ? (
        <FullButton
          icon="add"
          onClick={() => toggleForm(true)}
          label={"Add new Tag"}
        />
      ) : (
        <TagTemplate confirm={saveTag} cancel={() => toggleForm(false)} />
      )}
    </Fragment>
  );
};
export default AddTag;
