import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

export const CountdownSection = () => {
    return (
        <Section id="section6" background={gradient.blackGrey}>
          <h2>Defi 3.0 Begins Here</h2>
          <div>
            <p>Icon</p>
            <p>Icon</p>
            <p>Icon</p>

            <p>Timer</p>
          </div>
        </Section>
    )
}