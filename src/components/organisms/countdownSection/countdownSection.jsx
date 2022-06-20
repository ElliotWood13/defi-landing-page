import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { SectionWrapper, CountdownContainer, BackgroundCircleInnerMd, BackgroundCircleOuterMd, BackgroundCircleInnerLg, BackgroundCircleOuterLg, CountdownCircle, CrossHairHorizontal, CrossHairVertical, HeaderWrapper, HeaderTop, HeaderBottom, ImageWrapper, InputImage, ButtonImage, IconsWrapper, StyledSvg, DiscordSvgWrapper, TwitterSvgWrapper,MediumSvgWrapper } from './countdownSection.styles'

export const CountdownSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack} section='section-six'>
      <SectionWrapper>
        <CountdownContainer>
          <BackgroundCircleInnerMd />
          <BackgroundCircleOuterMd />
          <BackgroundCircleInnerLg />
          <BackgroundCircleOuterLg />
          <CountdownCircle />
          <CrossHairVertical />
          <CrossHairHorizontal />
          <HeaderWrapper>
            <HeaderTop>Defi 3.0</HeaderTop>
            <HeaderBottom>begins here</HeaderBottom>
            <ImageWrapper>
              <InputImage
                src={require('../../../images/white-input.png')}
                alt=""
                role="presentation"
              />
              <ButtonImage
                src={require('../../../images/enter-button.png')}
                alt=""
                role="presentation"
              />
            </ImageWrapper>
          </HeaderWrapper>
        </CountdownContainer>

        <IconsWrapper>
            <DiscordSvgWrapper>
              <StyledSvg type="discord" />
            </DiscordSvgWrapper>
            <TwitterSvgWrapper>
              <StyledSvg type="twitter" />
            </TwitterSvgWrapper>
            <MediumSvgWrapper>
              <StyledSvg type="medium" />
            </MediumSvgWrapper>
          </IconsWrapper>
      </SectionWrapper>
    </Section>
  )
})