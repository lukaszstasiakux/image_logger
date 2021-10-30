import styled from "styled-components";
import { colors } from "../../utils/Theme";

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
  background-color: ${colors.blueOcean};
	padding:0 1rem;
  font-size:1.6rem;
  color: ${colors.pureWhite};
`;

export const SidebarHeader = styled.div`
  color: ${colors.pureWhite};
  font-size: 1.6rem;
  margin-bottom:1rem;
`
interface OptionAreaProps{
  full? : boolean;
}
export const OptionArea = styled.div<OptionAreaProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color:${colors.darkerColor};
  border:0.1rem solid ${colors.lighterColor};
  padding: 0.3rem 1rem;
  border-radius:1rem;
  width: ${p => p.full ? '100%': 'auto'};
`

export const OptionLabel = styled.div`
  color: ${colors.pureWhite};
  font-size: 1.4rem;
`

export const Overlay = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  width:100%;
  height:100%;
  z-index:5;
  cursor: default;
`




