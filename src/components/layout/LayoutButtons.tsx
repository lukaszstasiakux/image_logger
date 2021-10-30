import React, { FC } from "react";

import { LAYOUT_MODE } from "../../utils/Const";
import { Alignment, OptionArea } from "../common/Common";
import { OptionButton } from "../common/Button";

const LayoutButtons: FC = () => {
  return (
    <OptionArea>
      <Alignment>
        <OptionButton
          icon="vertical_align_top"
          mode={LAYOUT_MODE.full_tagged}
        />
        <OptionButton icon="vertical_align_center" mode={LAYOUT_MODE.half} />
        <OptionButton
          icon="vertical_align_bottom"
          mode={LAYOUT_MODE.full_untagged}
        />
      </Alignment>
    </OptionArea>
  );
};

export default LayoutButtons;
