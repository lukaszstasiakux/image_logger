import styled from "styled-components";
import { Colors } from "../../utils/Theme";

interface AlignmentProps {
  direction?: string;
  horizontal?: string;
  vertical?: string;
}
export const Alignment = styled.div<AlignmentProps>`
  display: flex;
  flex-direction: ${(p) => (p.direction ? p.direction : "row")};
  justify-content: ${(p) => (p.horizontal ? p.horizontal : "space-between")};
  align-items: ${(p) => (p.vertical ? p.vertical : "center")};
`;

export const SectionHeader = styled(Alignment)`
  height: 4rem;
  background-color: ${Colors.gray};
	padding:0 1rem;
`;
