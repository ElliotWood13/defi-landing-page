import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import Circle from '../featuresSection/Circle' /* Change path when moved to modules folder */

import './countdownSection.css'

export const CountdownSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <div className="container">
        <div className="grid">

          {/* <Circle color="yellow" /> */}


          {/* <h2>Defi 3.0 Begins Here</h2> */}
          <div className="grid-section">
            <div className="icons">
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
          </div>

          <div className="grid-section">
            <div className="circle"></div>
          </div>

          <div className="grid-section">
            <div className="timer">Timer</div>
            <h2 className="timer__heading">Countdown Timer</h2>
          </div>

        </div>
      </div>
    </Section>
  )
})