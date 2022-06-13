import React from 'react'
import { SectionWrapper, LinesImage, SectionPosition } from './section.styles'

export const Section = React.forwardRef(({ background, section, children }, ref) => {
  const setBgBaseLines = (sect) => {
    // if (sect === 'section-one') return require('../../../images/section-one/section-one-base-lines.png')
    // if (sect === 'section-two') return require('../../../images/section-two/section-two-blended-lines.png')
    // if (sect === 'section-three') return require('../../../images/section-three/section-three-base-lines.png')
    // if (sect === 'section-four') return require('../../../images/section-three/section-three-base-lines.png')
    if (sect === 'section-five') return require('../../../images/section-five/base-lines-section5.png')
    // if (sect === 'section-six') return require('../../../images/baselines-with-glow.png')

    return require('../../../images/baselines-with-glow.png')
  }
  return (
    <SectionWrapper ref={ref} background={background}>
        <LinesImage
          src={setBgBaseLines(section)}
          alt=""
          role="presentation"
        />
      <SectionPosition>{children}</SectionPosition>
    </SectionWrapper>
  )
})
