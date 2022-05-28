import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

// TODO: Convert to pxToRem, color, fontWeight & add mediaQuery(?)

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

    color: white; /* Remove */
    border: ${pxToRem(2)} solid rgb(252, 252, 233); /* Remove */
    box-shadow: 0 0 ${pxToRem(20)} rgba(255, 255, 255, .5), 0 0 ${pxToRem(20)} rgba(255, 255, 255, .5); /* Remove */
`

const CircleCardInnerShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: transparent;

    box-shadow: ${pxToRem(5)} ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(5)} rgba(255, 255, 255, .5) inset; /* Remove */
`

const CircleHeaderH3 = styled.h3`
    background-color: rgba(0, 0, 0, .8); /* FOR YELLOW CIRCLES ONLY? */
    background-color: transparent; /* FOR WHITE CIRCLES ONLY? */
    color: white;
    font-size: ${pxToRem(24)};
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    padding: ${pxToRem(3)};
    z-index: 10;
`

const CircleText = styled.p`
    color: white;
    text-align: center;
    font-size: ${pxToRem(18)};
    font-weight: 300;
    margin: ${pxToRem(20)};
    z-index: 10;
`

export {
    CircleCard,
    CircleCardInnerShadow,
    CircleHeaderH3,
    CircleText,
}