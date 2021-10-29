import React, { FC } from 'react';
import Section from '../layout/Section';
import {Alignment, SectionHeader} from '../common/Common';

interface TaggedProps {
	mode: string
}

const Tagged:FC<TaggedProps> = ({mode}) => {
	return(
		<Section mode={mode}>
			<SectionHeader>
			Tagged section
			<Alignment>button</Alignment>
				</SectionHeader>

			
		</Section>
	)
}

export default Tagged;