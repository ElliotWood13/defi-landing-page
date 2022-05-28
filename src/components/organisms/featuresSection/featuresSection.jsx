import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { FeaturesSectionContainer, FeaturesSectionGrid, HeaderContainer, FeaturesSectionHeader, FeaturesSectionHeaderH2 } from './featuresSection.styles'


import './featuresSection.css'

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

          <div className="circle circle-white">
            <div className="circle__inner-shadow inner-shadow--white"></div>
            <h3 className="circle__header">Enhanced Security Network</h3>
          </div>

          <div className="circle circle-white">
            <div className="circle__inner-shadow inner-shadow--white"></div>
            <h3 className="circle__header">Insulation from market volatility</h3>
          </div>

          <div className="circle circle-white">
            <div className="circle__inner-shadow inner-shadow--white"></div>
            <h3 className="circle__header">Consistent network stability</h3>
          </div>

          <div className="circle circle-white">
            <div className="circle__inner-shadow inner-shadow--white"></div>
            <h3 className="circle__header">Interoperability between tradfi and defi</h3>
          </div>

        </FeaturesSectionGrid>
      </FeaturesSectionContainer>
    </Section>
  )
})