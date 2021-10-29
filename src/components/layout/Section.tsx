import React, { FC } from "react";
import styled from "styled-components";
import { SECTION_MODE } from "../../utils/Const";
import { Colors } from "../../utils/Theme";

interface AreaSectionProps {
  mode: string;
}
const AreaSection = styled.div<AreaSectionProps>`
  height: ${(p) =>
    p.mode === SECTION_MODE.max
      ? "calc(100% - 15rem)"
      : p.mode === SECTION_MODE.min
      ? "15rem"
      : "50%"};
  background-color: ${Colors.lightGray};
  transition: 300ms;
`;

interface SectionProps {
  children: React.ReactNode;
  mode: string;
}
const Section: FC<SectionProps> = ({ children, mode }) => {
  return <AreaSection mode={mode}>{children}</AreaSection>;
};

export default Section;
