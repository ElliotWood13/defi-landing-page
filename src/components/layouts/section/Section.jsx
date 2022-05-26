import React from 'react'
import { SectionWrapper, SectionPosition } from './section.styles'

export const Section = ({ id, backgroundColor, children }) => {
  return (
    <SectionWrapper id={id} backgroundColor={backgroundColor}>
      <SectionPosition>{children}</SectionPosition>
    </SectionWrapper>
  )
}
