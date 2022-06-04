import styled from 'styled-components'
import { mediaQuery, pxToRem, color, fontWeight } from '../../../design'
import { Svg } from '../../../helpers/svgMapper'

const SectionWrapper = styled.div`
  position: relative;
`

const CountdownContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BackgroundCircleInnerMd = styled.div`
  display: none;

  ${mediaQuery.sm} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 0, 0.3);
    border-radius: 50%;
    width: ${pxToRem(320)};
    height: ${pxToRem(320)};
  }
`

const BackgroundCircleOuterMd = styled.div`
  display: none;

  ${mediaQuery.sm} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 0, 0.3);
    border-radius: 50%;
    width: ${pxToRem(340)};
    height: ${pxToRem(340)};
  }
`

const BackgroundCircleInnerLg = styled.div`
  display: none;

  ${mediaQuery.sm} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 0, 0.3);
    border-radius: 50%;
    width: ${pxToRem(600)};
    height: ${pxToRem(600)};
  }
`

const BackgroundCircleOuterLg = styled.div`
  display: none;

  ${mediaQuery.sm} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 0, 0.3);
    border-radius: 50%;
    width: ${pxToRem(630)};
    height: ${pxToRem(630)};
  }
`

const CountdownCircle = styled.div`
  display: none;

  ${mediaQuery.sm} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: ${pxToRem(300)};
    height: ${pxToRem(300)};
    border-radius: 50%;
    border: 1px solid yellow;
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.5), 0 0 10px rgba(255, 255, 0, 0.5);
  }
`

const HeaderWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  max-width: ${pxToRem(300)};
  margin-bottom: ${pxToRem(50)};
`

const HeaderTop = styled.h3`
  font-size: ${pxToRem(70)};
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  text-shadow: 0 0 5px rgba(255, 255, 0, 0.3), 0 0 10px rgba(255, 255, 0, 0.3),
    0 0 15px rgba(255, 255, 0, 0.3), 0 0 20px rgba(255, 255, 0, 0.3),
    0 0 30px rgba(255, 255, 0, 0.3), 0 0 40px rgba(255, 255, 0, 0.3),
    0 0 55px rgba(255, 255, 0, 0.3), 0 0 75px rgba(255, 255, 0, 0.3);
  margin-top: ${pxToRem(30)};
  margin-bottom: -${pxToRem(20)};

  ${mediaQuery.sm} {
    font-size: ${pxToRem(60)};
  }
`

const HeaderBottom = styled.h3`
  color: ${color.white[100]};
  text-transform: uppercase;
  font-weight: ${fontWeight.light};
  text-shadow: 0 0 5px rgba(255, 255, 0, 0.3), 0 0 10px rgba(255, 255, 0, 0.3),
    0 0 15px rgba(255, 255, 0, 0.3), 0 0 20px rgba(255, 255, 0, 0.3),
    0 0 30px rgba(255, 255, 0, 0.3), 0 0 40px rgba(255, 255, 0, 0.3),
    0 0 55px rgba(255, 255, 0, 0.3), 0 0 75px rgba(255, 255, 0, 0.3);
  font-size: ${pxToRem(42)};

  ${mediaQuery.sm} {
    font-size: ${pxToRem(36)};
  }
`

const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery.xxs} {
    justify-content: center;
  }

  ${mediaQuery.sm} {
    position: absolute;
    bottom: -${pxToRem(174)};
    transform: translate(-50%);
    left: 50%;
    width: auto;
  }
`

const StyledSvg = styled(Svg)`
  height: ${pxToRem(30)};
  width: ${pxToRem(30)};
`

const DiscordSvgWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  transition: all 0.3s;
  background-color: rgb(50, 50, 50);
  border: none;
  border-radius: 50%;
  margin: ${pxToRem(8)};

  :hover {
    transform: scale(120%);
    filter: brightness(120%);
  }

  ${mediaQuery.xxs} {
    margin: ${pxToRem(15)};
  }
`

const TwitterSvgWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  transition: all 0.3s;
  background-color: rgb(50, 50, 50);
  border: none;
  border-radius: 10px;
  margin: ${pxToRem(8)};

  :hover {
    transform: scale(120%);
    filter: brightness(120%);
  }

  ${mediaQuery.xxs} {
    margin: ${pxToRem(15)};
  }
`

const MediumSvgWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  transition: all 0.3s;
  background-color: rgb(50, 50, 50);
  border: none;
  border-radius: 50%;
  margin: ${pxToRem(8)};

  :hover {
    transform: scale(120%);
    filter: brightness(120%);
  }

  ${mediaQuery.xxs} {
    margin: ${pxToRem(15)};
  }
`

export {
  SectionWrapper,
  CountdownContainer,
  BackgroundCircleInnerMd,
  BackgroundCircleOuterMd,
  BackgroundCircleInnerLg,
  BackgroundCircleOuterLg,
  CountdownCircle,
  HeaderWrapper,
  HeaderTop,
  HeaderBottom,
  IconsWrapper,
  StyledSvg,
  DiscordSvgWrapper,
  TwitterSvgWrapper,
  MediumSvgWrapper,
}
