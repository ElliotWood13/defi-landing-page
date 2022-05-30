import styled from 'styled-components'
import {
  pxToRem,
  color,
  fontWeight,
  borderRadius,
  shadow,
} from '../../../design'

const TeamCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  padding: ${pxToRem(16)} ${pxToRem(40)};
  border-radius: ${borderRadius.small};
  width: ${pxToRem(275)};
  max-width: ${pxToRem(275)};
  background: radial-gradient(
    circle,
    rgb(184 184 184) 40%,
    rgb(130 130 130) 70%,
    rgb(26 26 29) 100%
  );
  box-shadow: ${shadow.yellowOuter};
`

const TeamCardImageWrapper = styled.div`
  position: relative;
`

const TeamCardImage = styled.img`
  height: ${pxToRem(148)};
  width: ${pxToRem(148)};
  border-radius: 50%;
  margin-bottom: ${pxToRem(8)};
  border: 3px solid ${color.brand};
`

const TeamCardInnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${pxToRem(148)};
  width: ${pxToRem(148)};
  border-radius: 50%;
  background-color: transparent;
  box-shadow: ${shadow.yellowInner};
`

const TeamCardName = styled.p`
  color: ${color.white[100]};
  text-transform: uppercase;
  margin-bottom: ${pxToRem(4)};
  font-weight: ${fontWeight.medium};
`

const TeamCardPosition = styled.p`
  color: ${color.white[100]};
  text-transform: uppercase;
  font-weight: ${fontWeight.medium};
  text-align: center;
`

export {
  TeamCardWrapper,
  TeamCardImageWrapper,
  TeamCardImage,
  TeamCardInnerShadow,
  TeamCardName,
  TeamCardPosition,
}
