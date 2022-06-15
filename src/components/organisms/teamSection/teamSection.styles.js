import styled from 'styled-components'
import { pxToRem, mediaQuery, fontWeight } from '../../../design'

const TeamCardsContainer = styled.div`
  display: grid;
  gap: ${pxToRem(32)} ${pxToRem(32)};

  ${mediaQuery.sm} {
    position: relative;
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TeamSectionHeaderWrapper = styled.div`
  ${mediaQuery.sm} {
    position: absolute;
    top: -${pxToRem(50)};
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

  ${mediaQuery.sm} {
    margin-bottom: 0;
  }
`
export { TeamSectionHeaderWrapper, TeamSectionHeaderH2, TeamCardsContainer }
