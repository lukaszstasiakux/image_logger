import React, { FC, useContext } from "react";
import styled from "styled-components";
import { LayoutContext } from "../../context/Context";
import { Colors } from "../../utils/Theme";

interface WrapperIconProps {
  active: boolean;
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
    color: ${(p) => (p.active ? Colors.action : Colors.lightGray)};
  }
`;

interface IconButtonProps {
  icon: string;
  mode: string;
}

const IconButton: FC<IconButtonProps> = ({ icon,mode }) => {
  const {layoutMode, setLayout} = useContext(LayoutContext)
  const test = (value:string)=>{
    if(setLayout){
      setLayout(value)
    }
  }

  return (
    <WrapperIcon active={layoutMode===mode} onClick={() => test(mode)}>
      <i className="material-icons">{icon}</i>
    </WrapperIcon>
  );
};

export default IconButton;
