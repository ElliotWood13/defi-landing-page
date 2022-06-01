import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

// TODO: Convert values to color & fontWeight
// ❗️ ISSUE: (see line 19) - props (from featuresSection.jsx) don't seem to work when value is 'yellow'

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

  color: white;
  border: ${pxToRem(2)} solid rgb(252, 252, 233); 
  box-shadow: 0 0 ${pxToRem(20)} rgba(255, 255, 255, 0.5),
    0 0 ${pxToRem(20)} rgba(255, 255, 255, 0.5); /* Remove */

  border: 1px solid ${({ color }) => color === 'yellow' ? `${shadow.yellowOuter}` : `${shadow.whiteOuter}`};

`

const CircleCardInnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: transparent;

  box-shadow: ${({ color }) => color === 'yellow' ? `${shadow.yellowInner}` : `${shadow.whiteInner}`};
`

const CircleHeaderH3 = styled.h3`
// background-color: rgba(0, 0, 0, 0.8);
// background-color: transparent;
color: white;
font-size: ${pxToRem(24)};
font-weight: 400;
text-transform: uppercase;
text-align: center;
padding: ${pxToRem(3)};
z-index: 10;
text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000, 0 0 20px #000, 0 0 30px #000, 0 0 40px #000, 0 0 55px #000, 0 0 75px #000;
`

const CircleText = styled.p`
color: white;
text-align: center;
font-size: ${pxToRem(18)};
font-weight: 300;
margin: ${pxToRem(20)};
z-index: 10;
`

const CircleLine__Bottom = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 52px;
  background-color: white;
  box-shadow: ${({ color }) => color === 'yellow' ? `${shadow.yellowInner}` : `${shadow.whiteInner}`};
`

export { CircleCard, CircleCardInnerShadow, CircleHeaderH3, CircleText, CircleLine__Bottom }
