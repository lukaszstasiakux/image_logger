import { createContext, FC, useState } from "react";


interface SelectedPhotoProps {
  photoId: string;
  toggleSelection?: () => void;
}

export const defaultId: SelectedPhotoProps = {
  photoId: ''
};

const SelectedPhotoContext = createContext<SelectedPhotoProps>(defaultId);

export default SelectedPhotoContext;

interface SelectedPhotoProviderProps {
  children: React.ReactNode;
}
export const SelectedPhotoProvider: FC<SelectedPhotoProviderProps> = ({ children }) => {
  const [photoId, toggleSelection] = useState(defaultId.photoId);
  return (
    <SelectedPhotoContext.Provider
      value={{
				photoId,
				// @ts-ignore
        toggleSelection,
      }}
    >
      {children}
    </SelectedPhotoContext.Provider>
  );
};
