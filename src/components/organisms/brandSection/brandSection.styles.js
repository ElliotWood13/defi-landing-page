import styled from 'styled-components'
import { pxToRem, mediaQuery, color, fontWeight } from '../../../design'

const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const GridImage = styled.img`
  height: ${pxToRem(436)};
  width: ${pxToRem(312)};
  position: absolute;
  top: 38%;
  right: 50%;
  transform: translate(50%, -50%);

  ${mediaQuery.xxs} {
    top: 40%;
    height: ${pxToRem(516)};
    width: ${pxToRem(472)};
  }

  ${mediaQuery.xs} {
    top: 44%;
    height: ${pxToRem(644)};
    width: ${pxToRem(600)};
  }

  ${mediaQuery.sm} {
    height: ${pxToRem(708)};
    width: ${pxToRem(712)};
  }
`

const LogoImage = styled.img`
  height: ${pxToRem(284)};
  width: ${pxToRem(284)};
  margin: 0 auto;
  z-index: 1;

  ${mediaQuery.xxs} {
    height: ${pxToRem(364)};
    width: ${pxToRem(364)};
  }

  ${mediaQuery.xs} {
    height: ${pxToRem(412)};
    width: ${pxToRem(412)};
  }

  ${mediaQuery.sm} {
    height: ${pxToRem(428)};
    width: ${pxToRem(428)};
  }
`

const BrandText = styled.p`
  text-transform: uppercase;
  color: ${color.white[100]};
  text-align: center;
  font-size: ${pxToRem(40)};
  font-weight: ${fontWeight.bold};
  text-shadow: 0.5px 0.5px ${color.grey[400]};
  z-index: 1;

  ${mediaQuery.xs} {
    font-size: ${pxToRem(56)};
  }

  ${mediaQuery.sm} {
    font-size: ${pxToRem(60)};
  }
`

const BrandTagline = styled.p`
  text-align: center;
  color: ${color.grey[400]};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  font-size: ${pxToRem(18)};
  z-index: 1;

  ${mediaQuery.xs} {
    font-size: ${pxToRem(28)};
  }
`

export { BrandWrapper, GridImage, LogoImage, BrandText, BrandTagline }
