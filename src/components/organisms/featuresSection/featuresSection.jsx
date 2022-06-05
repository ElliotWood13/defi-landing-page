import React, { useState, useEffect } from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { FeaturesSectionContainer, FeaturesSectionGrid, HeaderContainer, FeaturesSectionHeader, FeaturesSectionHeaderH2, HorizontalLine } from './featuresSection.styles'
import { Circle } from '../../molecules/circle'
import { useWindowResize } from '../../../hooks'

export const FeaturesSection = React.forwardRef((props, ref) => {
  const [width] = useWindowResize()
  const [bottomLines, setBottomLines] = useState({ 1: true, 2: true, 3: true, 4: false})

  useEffect(() => {
    if (width >= 768) {
      setBottomLines({1: true, 2: true, 3: false, 4: false})
    }
  }, [width])

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

          <Circle color="white" header="Enhanced Security Network" bottomLine={bottomLines[1]} />
          <Circle color="white" header="Insulation from market volatility" bottomLine={bottomLines[2]} />
          <Circle color="white" header="Consistent network stability" bottomLine={bottomLines[3]} />
          <Circle color="white" header="Interoperability between tradfi and defi" bottomLine={bottomLines[4]} />

        </FeaturesSectionGrid>
      </FeaturesSectionContainer>
    </Section>
  )
})