import styled from 'styled-components'
import { pxToRem, mediaQuery, color, fontWeight } from '../../../design'

const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const BrandText = styled.p`
  text-transform: uppercase;
  color: ${color.white[100]};
  text-align: center;
  font-size: ${pxToRem(40)};
  font-weight: ${fontWeight.bold};

  ${mediaQuery.sm} {
    font-size: ${pxToRem(60)};
  }
`

const BrandTagline = styled.p`
  text-align: center;
  color: ${color.white[100]};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  font-size: ${pxToRem(18)};

  ${mediaQuery.sm} {
    font-size: ${pxToRem(28)};
  }
`

export { BrandWrapper, BrandText, BrandTagline }
