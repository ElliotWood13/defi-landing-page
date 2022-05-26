import styled from 'styled-components'
import { layout, mediaQuery, pxToRem, color } from '../../../design'

const SectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `${color.white[100]}`};
  padding: ${pxToRem(100)} ${pxToRem(20)};

  ${mediaQuery.sm} {
    padding: ${pxToRem(120)} ${pxToRem(20)};
  }
`

const SectionPosition = styled.div`
  width: 100%;
  max-width: ${layout.regular};
  margin: 0 auto;
`

export { SectionWrapper, SectionPosition }
