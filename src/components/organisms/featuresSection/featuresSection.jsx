import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { FeaturesSectionContainer, FeaturesSectionGrid, HeaderContainer, FeaturesSectionHeader, FeaturesSectionHeaderH2 } from './featuresSection.styles'
import Circle from './Circle'

import './featuresSection.css'

// TODO: Make 'color' prop affect Circle component's colour

export const FeaturesSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <FeaturesSectionContainer>
        <FeaturesSectionGrid>

          <HeaderContainer>
            <FeaturesSectionHeader>
              <FeaturesSectionHeaderH2>Built on the mesh network</FeaturesSectionHeaderH2>
            </FeaturesSectionHeader>
          </HeaderContainer>

          <Circle color="white" header="Enhanced Security Network" bottomLine={true} />
          <Circle color="white" header="Insulation from market volatility" bottomLine={true} />
          <Circle color="white" header="Consistent network stability" bottomLine={true} />
          <Circle color="white" header="Interoperability between tradfi and defi" bottomLine={false} />

        </FeaturesSectionGrid>
      </FeaturesSectionContainer>
    </Section>
  )
})