import React, { FC } from 'react';
import Section from '../layout/Section';
import LayoutButtons from '../layout/LayoutButtons';
import {SectionHeader} from '../common/Common';

const Untagged:FC = () => {
	return(
		<Section >
			<SectionHeader>
			Untagged section
			<LayoutButtons/>
			</SectionHeader>
		</Section>
	)
}

export default Untagged;