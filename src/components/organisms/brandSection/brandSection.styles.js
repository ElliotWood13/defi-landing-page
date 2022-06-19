import styled from 'styled-components'
import { pxToRem, mediaQuery, color, fontWeight } from '../../../design'
import { Svg } from '../../../helpers/svgMapper'

const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const GridImage = styled.img`
  height: ${pxToRem(436)};
  width: ${pxToRem(264)};
  position: absolute;
  top: 45%;
  right: 50%;
  transform: translate(50%, -50%);

  ${mediaQuery.xxs} {
    height: ${pxToRem(516)};
    width: ${pxToRem(344)};
  }

  ${mediaQuery.xs} {
    top: 44%;
    height: ${pxToRem(644)};
    width: ${pxToRem(536)};
  }

  ${mediaQuery.sm} {
    height: ${pxToRem(708)};
    width: ${pxToRem(648)};
  }
`

const LogoImage = styled.img`
  height: ${pxToRem(284)};
  width: ${pxToRem(252)};
  margin: 0 auto;
  z-index: 1;

  ${mediaQuery.xxs} {
    height: ${pxToRem(364)};
    width: ${pxToRem(316)};
  }

  ${mediaQuery.xs} {
    height: ${pxToRem(492)};
    width: ${pxToRem(428)};
  }

  ${mediaQuery.sm} {
    height: ${pxToRem(604)};
    width: ${pxToRem(524)};
  }
`

const BrandHeaderWrapper = styled.div`
  /* position: absolute;
  bottom: ${pxToRem(240)};

  ${mediaQuery.xxs} {
    bottom: ${pxToRem(210)};
  }

  ${mediaQuery.xs} {
    bottom: ${pxToRem(120)};
  } */

  ${mediaQuery.sm} {
    /* bottom: ${pxToRem(60)}; */
    box-shadow: 0px -13px 22px 13px #000, 0px 13px 22px 13px #000,
      0px 0px 19px 20px #000 inset;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7122199221485469) 0%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0.71) 100%
    );
  }
`

const BrandText = styled.p`
  text-transform: uppercase;
  color: ${color.white[100]};
  text-align: center;
  font-size: ${pxToRem(40)};
  font-weight: ${fontWeight.bold};
  z-index: 1;

  ${mediaQuery.xs} {
    font-size: ${pxToRem(56)};
  }

  ${mediaQuery.sm} {
    font-size: ${pxToRem(60)};
  }
`

const BrandTagline = styled.p`
  text-align: center;
  color: ${color.grey[400]};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  font-size: ${pxToRem(18)};
  z-index: 1;
  text-shadow: 0px 1px 15px ${color.grey[400]};

  ${mediaQuery.xs} {
    font-size: ${pxToRem(28)};
  }
`

const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${pxToRem(20)};
`

const PdfDownload = styled.a`
  display: flex;
  align-items: center;
  color: ${color.white[100]};
  background: ${color.black[100]};
  padding: ${pxToRem(8)};
  border: 1px solid ${color.white[100]};
  border-radius: 4px;
  box-shadow: 0 0 1.25rem rgb(255 255 255 / 50%),
    0 0 1.25rem rgb(255 255 255 / 50%);
  z-index: 1;

  :first-child {
    margin-right: ${pxToRem(8)};
  }
`

const StyledSvg = styled(Svg)`
  height: ${pxToRem(20)};
  width: ${pxToRem(20)};
  margin-left: ${pxToRem(4)};

  path {
    fill: ${color.white[100]};
  }
`

export {
  BrandWrapper,
  GridImage,
  LogoImage,
  BrandHeaderWrapper,
  BrandText,
  BrandTagline,
  DownloadWrapper,
  PdfDownload,
  StyledSvg,
}
