import { createContext } from "react";
import { PhotoDataProps, TagsDataProps } from "./workspaceHelper";

interface DefaultDataProps {
	photos:PhotoDataProps[],
	tags:TagsDataProps[],
	updateData? : ()=> void;
}

export const defaultData:DefaultDataProps = {
	photos:[],
	tags:[]
}

export const DataContext = createContext<DefaultDataProps>(defaultData)