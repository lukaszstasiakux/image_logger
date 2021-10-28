import React, { FC } from "react";
import {Alignment} from '../common/Common'
import IconButton from "../common/IconButton";


const LayoutButtons:FC = () =>{
 return(
	<Alignment>
<IconButton icon='vertical_align_top'/>
<IconButton icon='vertical_align_center'/>
<IconButton icon='vertical_align_bottom'/>
	</Alignment>
 )
}

export default LayoutButtons;

