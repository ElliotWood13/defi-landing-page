import styled from 'styled-components'
import { pxToRem, mediaQuery } from '../../../design'

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 20;
  padding: ${pxToRem(5)};
  top: ${pxToRem(20)};
  left: ${pxToRem(20)};

  ${mediaQuery.md} {
    padding: ${pxToRem(20)};
  }
`

export { HeaderWrapper }
