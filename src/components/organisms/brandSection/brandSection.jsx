import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { BrandTagline, BrandText, BrandWrapper } from './brandSection.styles'

export const BrandSection = () => {
    return (
        <Section id="section1" background={gradient.greyBlack}>
            <BrandWrapper>
                <BrandText>Impact Defi</BrandText>
                <BrandTagline>The future lives on the mesh</BrandTagline>
            </BrandWrapper>
        </Section>
    )
}