import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

export const FeaturesSection = React.forwardRef((props, ref) => {
    return (
      <Section ref={ref} background={gradient.greyBlack}>
        <h2>Built on the mesh network</h2>
        <h3>Enhanced Security Network</h3>
        <h3>Insulation from market volatility</h3>
        <h3>Consistent network stability</h3>
        <h3>Interoperability between tradfi and defi</h3>
      </Section>
    )
})