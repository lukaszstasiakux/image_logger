import { createContext } from "react";
import { PhotoDataProps } from "./workspaceHelper";
import { TagsDataProps } from "./tagsHelper";

interface DefaultDataProps {
  photos: PhotoDataProps[];
  tags: TagsDataProps[];
  updateData?:() => void;
}

export const defaultData: DefaultDataProps = {
  photos: [],
  tags: [],
};

export const DataContext = createContext<DefaultDataProps>(defaultData);
