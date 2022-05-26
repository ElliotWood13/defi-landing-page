import styled from 'styled-components'
import { layout, mediaQuery, pxToRem, color } from '../../../design'

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `${color.white[100]}`};
  padding: ${pxToRem(20)} ${pxToRem(20)};

  ${mediaQuery.sm} {
    padding: ${pxToRem(30)} ${pxToRem(20)};
  }
`

const HeaderPosition = styled.div`
  width: 100%;
  max-width: ${layout.regular};
  margin: 0 auto;
`

export { HeaderWrapper, HeaderPosition }
