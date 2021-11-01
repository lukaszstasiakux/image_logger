import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Theme";
import { Alignment, Overlay } from "../common/Common";

const WrapperModal = styled.div`
  position: relative;
`;
const ModalArea = styled.div`
  width: 30rem;
  margin: 5% auto;
  left: 0;
  right: 0;
  top: 40%;
  position: fixed;
  z-index: 10;
  background: ${colors.pureWhite};
  font-size: 1.6rem;
  padding: 1rem;
`;
const ModalContent = styled.div`
  margin-bottom: 2rem; ;
	color:${colors.nearBlack};
`;
const ModalAction = styled.div`
  padding: 1rem;
  color: ${colors.action};
  cursor: pointer;
`;
interface ModalProps {
  cancel: any;
  confirm: any;
  children: React.ReactNode;
  confirmLabel: string;
}
const Modal: FC<ModalProps> = ({ cancel, confirm, children, confirmLabel }) => {
  return (
    <WrapperModal>
      <Overlay onClick={() => cancel()} />
      <ModalArea>
        <ModalContent>{children}</ModalContent>
        <Alignment>
          <ModalAction onClick={() => confirm()}>{confirmLabel}</ModalAction>
          <ModalAction onClick={() => cancel()}>Cancel</ModalAction>
        </Alignment>
      </ModalArea>
    </WrapperModal>
  );
};

export default Modal;
