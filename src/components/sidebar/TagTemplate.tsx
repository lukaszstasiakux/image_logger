import React, { FC, useContext, useState } from "react";
import { BlockPicker } from "react-color";
import styled from "styled-components";
import { colors, tagsColor } from "../../utils/Theme";
import { IconButton } from "../common/Button";
import { Alignment, OptionArea, Overlay, TagColor } from "../common/Common";
import DataContext from "../workspace/DataContext";
import { defineColor } from "../workspace/tagsHelper";

const WrapperForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TagNameInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: ${colors.pureWhite};
  border-bottom: 0.1rem solid ${colors.action};
`;

const WrapperColorPicker = styled.div`
  position: relative;
`;

const PointerColorPicker = styled.div`
  width: 20rem;
  left: -9rem;
  top: 3rem;
  position: absolute;
  z-index: 10;
`;

interface TagColorPickerProps {
  tagColor: string;
  changeAction: any;
}
const TagColorPicker: FC<TagColorPickerProps> = ({
  tagColor,
  changeAction,
}) => {
  const [showPicker, tooglePicker] = useState(false);

  const closeAction = (color: string) => {
    changeAction(color);
    tooglePicker(false);
  };
  return (
    <WrapperColorPicker>
      <TagColor color={tagColor} onClick={() => tooglePicker(true)} />
      {showPicker && (
        <>
          <Overlay onClick={() => tooglePicker(false)} />
          <PointerColorPicker>
            <BlockPicker
              width={"200"}
              colors={tagsColor}
              color={tagColor}
              onChangeComplete={(e) => closeAction(e.hex)}
            />
          </PointerColorPicker>
        </>
      )}
    </WrapperColorPicker>
  );
};

interface TagTemplateProps {
  value?: string;
  color?: string;
  confirm: any;
  cancel: any;
}
const TagTemplate: FC<TagTemplateProps> = ({
  value,
  confirm,
  cancel,
  color,
}) => {
  const [fieldValue, changeValue] = useState(value ? value : "");
  const { data } = useContext(DataContext);
  const { tags } = data;
  const [tagColor, updateColor] = useState(
    color ? color : defineColor(tags, tagsColor)
  );

  return (
    <OptionArea full>
      <WrapperForm>
        <Alignment>
          <TagColorPicker tagColor={tagColor} changeAction={updateColor} />
          <TagNameInput
            type="text"
            onChange={(e) => changeValue(e.target.value)}
            value={fieldValue}
            placeholder="here type tag name"
          />
        </Alignment>

        <Alignment>
          <IconButton
            icon="done"
            onClick={() => confirm(fieldValue, tagColor)}
          />
          <IconButton icon="close" onClick={() => cancel()} />
        </Alignment>
      </WrapperForm>
    </OptionArea>
  );
};

export default TagTemplate;
