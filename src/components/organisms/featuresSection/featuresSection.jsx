import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

import './featuresSection.css'

export const FeaturesSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <div className="container">
        <div className="grid">

          <div className="featuresSection__header">
            <h2>Built on the mesh network</h2>
          </div>

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

        </div>
      </div>
    </Section>
  )
})