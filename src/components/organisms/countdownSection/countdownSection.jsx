import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import Circle from '../featuresSection/Circle' /* Change path when moved to modules folder */

// TODO: Change Circle import path when/if moved to modules folder
// TODO: (in Circle.jsx) Make border and shadow of Circle change colour to match prop

export const CountdownSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.blackGrey}>

      <Circle color="yellow" />

      <h2>Defi 3.0 Begins Here</h2>
      <div>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>

        <p>Timer</p>
      </div>
    </Section>
  )
})