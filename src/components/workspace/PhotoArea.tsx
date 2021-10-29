import React, { FC, useContext, useMemo } from "react";
import styled from "styled-components";
import { SECTION_MODE } from "../../utils/Const";
import { DataContext } from "./DataContext";
import { photosSelector } from "./workspaceHelper";
import Photo from './Photo';

interface SectionContentProps{
	list:boolean;
}

const WrapperPhotoArea = styled.div<SectionContentProps>`
	display: flex;
	flex-direction: row;
  justify-content:flex-start;
  align-items: stretch;
  box-sizing: border-box;
  align-content: flex-start;
	flex-wrap:${p => p.list ? 'nowrap' : 'wrap' };
	overflow: auto;
	width:100%;
	`
	
	export const SectionContent = styled.div<SectionContentProps>`
		
		display: flex;
		height: calc(100% - 4rem);
		overflow: hidden;
		width:100%;
	`;

/* flex-wrap: ${p => p.list ? 'nowrap' : 'wrap' }; */
interface PhotoAreaProps {
	mode:string;
	hasTags: boolean;

}

const PhotoArea:FC<PhotoAreaProps> = ({mode,hasTags}) =>{
	const { photos } = useContext(DataContext);
  const photoScope = useMemo(() => {
    return photosSelector(photos, hasTags);
  }, [photos]);

	return(
		<SectionContent list={mode===SECTION_MODE.min}>
				<WrapperPhotoArea list={mode===SECTION_MODE.min}>
        {
          photoScope.map((photo) => <Photo data={photo} key={photo.id} mode={mode}/>)}
      
			</WrapperPhotoArea>
		</SectionContent>
	)
}

export default PhotoArea;