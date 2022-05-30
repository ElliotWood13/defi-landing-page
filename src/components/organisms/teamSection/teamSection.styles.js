import styled from 'styled-components'
import { color, pxToRem, mediaQuery, fontWeight } from '../../../design'

const TeamSectionHeaderH2 = styled.h2`
  color: white;
  font-size: ${pxToRem(40)};
  font-weight: ${fontWeight.normal};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${pxToRem(40)};
  text-shadow: -2px 1px 2px ${color.grey[400]};
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
export { TeamSectionHeaderH2, TeamCardsContainer }
