import React, { FC } from "react";

import { LAYOUT_MODE } from "../../utils/Const";
import { Alignment } from "../common/Common";
import IconButton from "../common/IconButton";

const LayoutButtons: FC = () => {
  return (
    <Alignment>
      <IconButton icon="vertical_align_top" mode={LAYOUT_MODE.full_tagged} />
      <IconButton icon="vertical_align_center" mode={LAYOUT_MODE.half} />
      <IconButton icon="vertical_align_bottom" mode={LAYOUT_MODE.full_untagged} />
    </Alignment>
  );
};

export default LayoutButtons;
