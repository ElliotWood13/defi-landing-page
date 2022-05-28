import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

// TODO: Use pxToRem ✅
// TODO: Check grid (not changing to 300px 500px 300px on mediaQuery.lg)

const DefiSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DefiSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(5, auto);
  grid-gap: ${pxToRem(50)};
  /* grid-template-areas: "quote", "circle", "circle", "circle", "circle"; */

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, ${pxToRem(300)});
    grid-template-rows: repeat(3, auto);
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, ${pxToRem(300)});
    grid-template-rows: repeat(2, auto);
  }

  ${mediaQuery.lg} {
    grid-template-columns: ${pxToRem(300)} ${pxToRem(500)} ${pxToRem(300)};
    grid-template-rows: repeat(2, auto);
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.sm} {
    grid-column: 1 / 3;
  }

  ${mediaQuery.md} {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    height: 100%;
  }
`

const Blockquote = styled.blockquote`
  background: linear-gradient(to bottom, lightgray, gray);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: ${pxToRem(40)};
  text-align: center;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0 ${pxToRem(20)};

  ${mediaQuery.md} {
    max-width: ${pxToRem(300)};
  }
`

const BlockquoteName = styled.span`
  color: blue;
  display: block;
  font-size: ${pxToRem(18)};
  font-weight: 600;
  margin-top: ${pxToRem(16)};
`

const Circle = styled.div`
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
  border: ${pxToRem(2)} solid rgb(252, 252, 233);
  box-shadow: ${shadow.yellowOuter};
`

const CircleInnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: ${shadow.yellowInner};
`

export {
  DefiSectionContainer,
  DefiSectionGrid,
  HeaderContainer,
  Blockquote,
  BlockquoteName,
  Circle,
  CircleInnerShadow,
}
