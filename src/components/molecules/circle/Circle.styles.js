import styled from 'styled-components'
import { pxToRem, shadow, color, fontWeight, mediaQuery } from '../../../design'

const CircleCard = styled.div`
  width: ${pxToRem(300)};
  height: ${pxToRem(300)};
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  color: ${color.white[100]};
  border: ${pxToRem(2)} solid rgb(252, 252, 233);
  box-shadow: 0 0 ${pxToRem(20)} rgba(255, 255, 255, 0.5),
    0 0 ${pxToRem(20)} rgba(255, 255, 255, 0.5);
  border: 1px solid
    ${({ color }) =>
      color === 'yellow' ? `${shadow.yellowOuter}` : `${shadow.whiteOuter}`};
`

const CircleCardInnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: ${({ color }) =>
    color === 'yellow' ? `${shadow.yellowInner}` : `${shadow.whiteInner}`};
`

const CircleHeaderH3 = styled.h3`
  ${({ color }) => color === 'yellow' && `max-width: ${pxToRem(165)};`}
  color: ${color.white[100]};
  font-size: ${pxToRem(24)};
  font-weight: ${fontWeight.medium};
  text-transform: uppercase;
  text-align: center;
  padding: ${pxToRem(3)};
  z-index: 10;
  text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000, 0 0 20px #000,
    0 0 30px #000, 0 0 40px #000, 0 0 55px #000, 0 0 75px #000;
`

const CircleText = styled.p`
  color: ${color.white[100]};
  text-align: center;
  font-size: ${pxToRem(18)};
  font-weight: ${fontWeight.light};
  margin: ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)};
  z-index: 10;
`

const CircleLineBottom = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: ${pxToRem(2)};
  height: ${pxToRem(52)};
  background-color: ${(props) =>
    props.color === 'yellow' ? `#fffc66a1` : `${color.white[100]}`};
  box-shadow: ${(props) =>
    props.color === 'yellow'
      ? `0px 0px 19px 1px ${color.brand};`
      : `0px 0px 19px 1px ${color.white[100]};`};

  ${mediaQuery.sm} {
    height: ${pxToRem(103)};
  }
`

export {
  CircleCard,
  CircleCardInnerShadow,
  CircleHeaderH3,
  CircleText,
  CircleLineBottom,
}
