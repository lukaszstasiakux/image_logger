import React, { FC } from "react";
import styled from "styled-components";
import {Alignment,SidebarHeader} from '../common/Common';
import AddTag from './AddTag';

const WrapperTagSection = styled.div`
	padding:1rem ;

`
const TagsSection:FC = ()=> {
	return (
		<WrapperTagSection>
			<Alignment direction='column' vertical='flex-start'>
				<SidebarHeader>Tags</SidebarHeader>
				<AddTag/>
			</Alignment>
		</WrapperTagSection>
	)
}

export default TagsSection;