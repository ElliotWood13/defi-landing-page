import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

export const TeamSection = () => {
    return (
      <Section id="section4" background={gradient.blackGrey}>
        <h2>Team</h2>
        <div>
          <p>Shubham</p>
          <p>Social Media Director</p>
        </div>
        <div>
          <p>AJ</p>
          <p>Founder and CEO</p>
        </div>
        <div>
          <p>Cyborg</p>
          <p>VP Development</p>
        </div>
      </Section>
    )
}