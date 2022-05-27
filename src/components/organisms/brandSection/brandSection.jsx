import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { BrandTagline, BrandText, BrandWrapper } from './brandSection.styles'

export const BrandSection = React.forwardRef((props, ref) => {
    return (
        <Section ref={ref} background={gradient.greyBlack}>
            <BrandWrapper>
                <BrandText>Impact Defi</BrandText>
                <BrandTagline>The future lives on the mesh</BrandTagline>
            </BrandWrapper>
        </Section>
    )
})