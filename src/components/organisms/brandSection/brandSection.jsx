import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { BrandTagline, GridImage, LogoImage, BrandHeaderWrapper, BrandText, BrandWrapper, DownloadWrapper, PdfDownload, StyledSvg } from './brandSection.styles'

export const BrandSection = React.forwardRef((props, ref) => {
    const LitePaperLink = require('../../../images/LightPaper.pdf')
    const PitchDeckLink = require('../../../images/PitchDeck.pdf')
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
                <DownloadWrapper>
                    <PdfDownload href={LitePaperLink} download="ImpactDefiLitePaper">Lite Paper <StyledSvg type="fileDownload" /></PdfDownload>
                    <PdfDownload href={PitchDeckLink} download="ImpactDefiPitchDeck">Pitch Deck <StyledSvg type="fileDownload" /></PdfDownload>
                </DownloadWrapper>
            </BrandHeaderWrapper>
        </Section>
    )
})