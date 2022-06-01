import React from 'react'
import { SectionWrapper, SectionPosition } from './section.styles'

export const Section = React.forwardRef(({ id, background, children }, ref) => {
  return (
    <SectionWrapper ref={ref} background={background}>
        {/* <LinesImage
          src={require('../../../images/middle-lines.png')}
          alt=""
          role="presentation"
        /> */}
      <SectionPosition>{children}</SectionPosition>
    </SectionWrapper>
  )
})
