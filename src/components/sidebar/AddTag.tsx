import React, { FC, Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Theme";
import { FullButton, IconButton } from "../common/Button";
import { Alignment, OptionArea } from "../common/Common";
import { DataContext } from "../workspace/DataContext";
import TagTemplate from "./TagTemplate";

const AddTag: FC = () => {
  const [showForm, toggleForm] = useState(false);
  // const {tags} = useContext(DataContext);
  console.log(useContext(DataContext));

  const saveTag = (tagName: string, color: string) => {
    // const newTags = [...tags];
    // newTags.push({
    //   id: "dupa",
    //   name: tagName,
    //   color: color,
    // });
    // updateData({
    //   tags: newTags,
    // });

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
