import styled from 'styled-components'
import { pxToRem, mediaQuery, fontWeight } from '../../../design'

const TeamContainer = styled.div`
  position: relative;
`

const TeamCardsContainer = styled.div`
  display: grid;
  gap: ${pxToRem(32)} ${pxToRem(32)};

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TeamSectionHeaderWrapper = styled.div`
  ${mediaQuery.sm} {
    width: fit-content;
    margin: 0 auto;
    box-shadow: 0px -13px 22px 13px #000, 0px 13px 22px 13px #000,
      0px 0px 19px 20px #000 inset, 20px 0px 22px 20px #000,
      -20px 0px 22px 20px #000;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7122199221485469) 0%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0.71) 100%
    );
  }
`

const TeamSectionHeaderH2 = styled.h2`
  color: white;
  font-size: ${pxToRem(40)};
  font-weight: ${fontWeight.normal};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${pxToRem(40)};
  width: ${pxToRem(150)};

  ${mediaQuery.sm} {
    margin-bottom: ${pxToRem(68)};
  }
`
export {
  TeamContainer,
  TeamSectionHeaderWrapper,
  TeamSectionHeaderH2,
  TeamCardsContainer,
}
