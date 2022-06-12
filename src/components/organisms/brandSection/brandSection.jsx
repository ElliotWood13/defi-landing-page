import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { BrandTagline, GridImage, LogoImage, BrandHeaderWrapper, BrandText, BrandWrapper } from './brandSection.styles'

export const BrandSection = React.forwardRef((props, ref) => {
    return (
        <Section ref={ref} background={gradient.greyBlack} section='section-one'>
            <BrandWrapper>
                <GridImage
                    src={require('../../../images/grid.png')}
                    alt=""
                    role="presentation"
                />
                <LogoImage
                    src={require('../../../images/globe-and-logo.png')}
                    alt=""
                    role="presentation"
                />
            </BrandWrapper>
            <BrandHeaderWrapper>
                <BrandText>Impact Defi</BrandText>
                <BrandTagline>The future lives on the mesh</BrandTagline>
            </BrandHeaderWrapper>
        </Section>
    )
})