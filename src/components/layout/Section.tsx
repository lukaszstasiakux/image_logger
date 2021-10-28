import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../utils/Theme";

interface AreaSectionProps {
  top?: boolean;
  bottom?: boolean;
}
const AreaSection = styled.div<AreaSectionProps>`
  height: 50%;
  background-color: ${Colors.lightGray};

`;

interface SectionProps {
  children: React.ReactNode;

}
const Section: FC<SectionProps> = ({ children }) => {
  return (
    <AreaSection >
      {children}
    </AreaSection>
  );
};

export default Section;
