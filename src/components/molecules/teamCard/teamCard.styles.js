import styled from 'styled-components'
import { pxToRem, color, fontWeight, borderRadius } from '../../../design'

const TeamCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  padding: ${pxToRem(8)} ${pxToRem(40)};
  border-radius: ${borderRadius.small};
  width: ${pxToRem(270)};
  max-width: ${pxToRem(270)};
  /* box-shadow: -3px -19px 76px -3px rgba(255, 252, 102, 1); */
  background: radial-gradient(
    circle,
    rgb(184 184 184) 40%,
    rgb(130 130 130) 70%,
    rgb(149 149 151) 100%
  );
`

const TeamCardOuterBox = styled.div`
  position: absolute;
  top: -21px;
  width: 265px;
  height: 20px;
  background-color: #363636;
  opacity: 0.8;
  border-radius: 4px;
`

const TeamCardName = styled.p`
  color: ${color.white[100]};
  text-transform: uppercase;
  margin-bottom: ${pxToRem(8)};
  font-weight: ${fontWeight.medium};
`

const TeamCardPosition = styled.p`
  color: ${color.white[100]};
  text-transform: uppercase;
  font-weight: ${fontWeight.medium};
  text-align: center;
`

export { TeamCardWrapper, TeamCardOuterBox, TeamCardName, TeamCardPosition }
