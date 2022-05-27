import React from 'react'
import { SectionWrapper, SectionPosition } from './section.styles'

export const Section = React.forwardRef(({ id, background, children }, ref) => {
  return (
    <SectionWrapper ref={ref} background={background}>
      <SectionPosition>{children}</SectionPosition>
    </SectionWrapper>
  )
})
