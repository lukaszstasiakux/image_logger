import React, { FC } from 'react';
import Section from '../layout/Section';
import LayoutButtons from '../layout/LayoutButtons';
import {SectionHeader} from '../common/Common';

interface UntaggedProps {
	mode: string
}
const Untagged:FC<UntaggedProps> = ({mode}) => {
	return(
		<Section mode={mode}>
			<SectionHeader>
			Untagged section
			<LayoutButtons/>
			</SectionHeader>
		</Section>
	)
}

export default Untagged;