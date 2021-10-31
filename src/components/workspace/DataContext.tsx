import { createContext, FC, useState } from "react";
import { PhotoDataProps } from "./workspaceHelper";
import { TagsDataProps } from "./tagsHelper";

interface DataProps {
  photos: PhotoDataProps[];
  tags: TagsDataProps[];
}
interface DefaultDataProps {
  data: DataProps;
  updateData?: () => void;
}

export const defaultData: DefaultDataProps = {
  data: {
    photos: [],
    tags: [],
  },
};

const DataContext = createContext<DefaultDataProps>(defaultData);

export default DataContext;

interface DataProviderProps {
  children: React.ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, updateData] = useState(defaultData.data);

	const setData = (obj:any)=>{
		sessionStorage.setItem('saveData', JSON.stringify(obj));
		updateData(obj)
	}

  return (
    <DataContext.Provider
      value={{
					data,
				// @ts-ignore
        updateData:(obj)=>setData(obj),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
