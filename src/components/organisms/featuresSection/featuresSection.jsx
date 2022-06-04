import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { FeaturesSectionContainer, FeaturesSectionGrid, HeaderContainer, FeaturesSectionHeader, FeaturesSectionHeaderH2, HorizontalLine } from './featuresSection.styles'
import { Circle } from '../../molecules/circle'

export const FeaturesSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack} section='section-three'>
      <FeaturesSectionContainer>
        <FeaturesSectionGrid>
          <HeaderContainer>
            <FeaturesSectionHeader>
              <FeaturesSectionHeaderH2>Built on the mesh network</FeaturesSectionHeaderH2>
            </FeaturesSectionHeader>
            {/* <HorizontalLine /> */}
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