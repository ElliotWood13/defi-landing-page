import styled from 'styled-components'
import { layout, mediaQuery, pxToRem, gradient } from '../../../design'

const SectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => props.background ?? gradient.greyBlack};
  padding: ${pxToRem(100)} ${pxToRem(20)};
  min-height: 100vh;

  ${mediaQuery.sm} {
    padding: ${pxToRem(120)} ${pxToRem(20)};
  }
`

const SectionPosition = styled.div`
  width: 100%;
  max-width: ${layout.regular};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export { SectionWrapper, SectionPosition }
