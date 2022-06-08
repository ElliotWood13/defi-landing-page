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
    border: 1px solid ${color.white[100]};
    opacity: 0.3;
    border-radius: 50%;
    width: ${pxToRem(365)};
    height: ${pxToRem(365)};
  }

  ${mediaQuery.md} {
    width: ${pxToRem(445)};
    height: ${pxToRem(445)};
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
    border: 1px solid ${color.white[100]};
    opacity: 0.3;
    border-radius: 50%;
    width: ${pxToRem(375)};
    height: ${pxToRem(375)};
  }

  ${mediaQuery.md} {
    width: ${pxToRem(455)};
    height: ${pxToRem(455)};
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
    width: ${pxToRem(740)};
    height: ${pxToRem(740)};
  }

  ${mediaQuery.md} {
    width: ${pxToRem(810)};
    height: ${pxToRem(810)};
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
    border: 1px solid ${color.white[100]};
    opacity: 0.3;
    border-radius: 50%;
    width: ${pxToRem(760)};
    height: ${pxToRem(760)};
  }

  ${mediaQuery.md} {
    width: ${pxToRem(840)};
    height: ${pxToRem(840)};
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
    width: ${pxToRem(345)};
    height: ${pxToRem(345)};
    border-radius: 50%;
    border: 1px solid ${color.brand};
    box-shadow: 0 0 6px ${color.brand}, 0 0 6px ${color.brand};
  }

  ${mediaQuery.md} {
    width: ${pxToRem(425)};
    height: ${pxToRem(425)};
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
    bottom: -${pxToRem(206)};
    transform: translate(-50%);
    left: 50%;
    width: auto;
  }

  ${mediaQuery.md} {
    bottom: -${pxToRem(254)};
  }
`

const StyledSvg = styled(Svg)`
  height: ${pxToRem(40)};
  width: ${pxToRem(40)};
`

const DiscordSvgWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  background-color: rgb(50, 50, 50);
  border: none;
  border-radius: 50%;
  margin: ${pxToRem(8)};
  padding: ${pxToRem(10)};

  path {
    fill: ${color.white[100]};
  }

  :hover {
    transform: scale(1.1);
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
  transition: all 0.3s;
  background-color: rgb(50, 50, 50);
  border: none;
  border-radius: 10px;
  margin: ${pxToRem(8)};
  padding: ${pxToRem(10)};

  path {
    fill: ${color.white[100]};
  }

  :hover {
    transform: scale(1.1);
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
  transition: all 0.3s;
  border: none;
  border-radius: 50%;
  margin: ${pxToRem(8)};

  path {
    fill: ${color.white[100]};
  }

  :hover {
    transform: scale(1.1);
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
