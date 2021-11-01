import { createContext } from "react";
import { LAYOUT_MODE } from "../utils/Const";

interface LayoutSettingProps {
  layoutMode: string;
  setLayout?: (value: string) => void;
}
export const defaultState: LayoutSettingProps = {
  layoutMode: LAYOUT_MODE.half,
};

export const LayoutContext =
  createContext<Partial<LayoutSettingProps>>(defaultState);
