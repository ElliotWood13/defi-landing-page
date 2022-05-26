import React from 'react'
import { SectionWrapper, SectionPosition } from './section.styles'

export const Section = ({ id, background, children }) => {
  return (
    <SectionWrapper id={id} background={background}>
      <SectionPosition>{children}</SectionPosition>
    </SectionWrapper>
  )
}
