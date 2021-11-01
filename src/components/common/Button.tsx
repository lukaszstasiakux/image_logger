import React, { FC, useContext } from "react";
import styled from "styled-components";
import { LayoutContext } from "../../context/Context";
import { colors } from "../../utils/Theme";
import { OptionArea, OptionLabel } from "./Common";

interface WrapperIconProps {
  active?: boolean;
}
const WrapperIcon = styled.div<WrapperIconProps>`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.4rem 0;
  width: 3.2rem;
  cursor: pointer;
  i {
    font-size: 2rem;
    color: ${(p) => (p.active ? colors.action : colors.pureWhite)};
  }
`;

interface OptionButtonProps {
  icon: string;
  mode: string;
}

export const OptionButton: FC<OptionButtonProps> = ({ icon, mode }) => {
  const { layoutMode, setLayout } = useContext(LayoutContext);
  const setOption = (value: string) => {
    if (setLayout) {
      setLayout(value);
    }
  };

  return (
    <WrapperIcon active={layoutMode === mode} onClick={() => setOption(mode)}>
      <i className="material-icons">{icon}</i>
    </WrapperIcon>
  );
};
interface IconButtonProps {
  icon: string;
  onClick: any;
  active?: boolean;
}
export const IconButton: FC<IconButtonProps> = ({ icon, onClick, active }) => {
  return (
    <WrapperIcon onClick={() => onClick()} active={active}>
      <i className="material-icons">{icon}</i>
    </WrapperIcon>
  );
};

interface FullButtonProps {
  icon: string;
  label: string;
  onClick: any;
}

export const FullButton: FC<FullButtonProps> = ({ icon, label, onClick }) => {
  return (
    <OptionArea onClick={() => onClick()}>
      <WrapperIcon>
        <i className="material-icons">{icon}</i>
      </WrapperIcon>
      <OptionLabel>{label}</OptionLabel>
    </OptionArea>
  );
};
