import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../utils/Theme";


const WrapperIcon = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding:0.4rem 0;
  width: 3.2rem;
  i {
    font-size: 2rem;
    color: ${Colors.lightGray};
  }
`;

interface IconButtonProps {
  icon: string;
}

const IconButton: FC<IconButtonProps> = ({ icon }) => {
  return (
    <WrapperIcon>
      <i className="material-icons">{icon}</i>
    </WrapperIcon>
  );
};

export default IconButton;
