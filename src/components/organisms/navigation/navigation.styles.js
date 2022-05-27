import styled from 'styled-components'
import { pxToRem, mediaQuery, color, font, fontWeight } from '../../../design'
import { Svg } from '../../../helpers/svgMapper'

const Burger = styled.button`
  border: none;
  background: none;

  ${mediaQuery.md} {
    display: none;
  }
`

const BurgerSvg = styled(Svg)`
  height: ${pxToRem(30)};
  width: ${pxToRem(30)};
`

const CloseButton = styled.button`
  border: none;
  background: none;

  ${mediaQuery.md} {
    display: none;
  }
`

const CloseSvg = styled(Svg)`
  height: ${pxToRem(30)};
  width: ${pxToRem(30)};
`

const Nav = styled.nav`
  position: fixed;
  z-index: 10;
  width: ${(props) => (props.mobileMenuOpen ? '100%' : '0')};
  background-color: ${color.black[100]};
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.5s ease;
  border-top-right-radius: ${pxToRem(40)};

  ${mediaQuery.sm} {
    width: ${(props) => (props.mobileMenuOpen ? `60%` : `0`)};
    ${(props) =>
      props.mobileMenuOpen &&
      `box-shadow: 0 0 0 ${pxToRem(1000)} rgba(0, 0, 0, 0.5)`};
  }

  ${mediaQuery.md} {
    position: static;
    width: initial;
    padding: 0;
    border-right: 0;
    background-color: ${color.white[100]};
  }
`

const NavLogoWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: ${pxToRem(24)} ${pxToRem(20)};

  ${mediaQuery.md} {
    display: none;
  }
`

const LinkList = styled.ul`
  background-color: ${color.black[100]};
  width: 100%;
  padding: 0 ${pxToRem(20)} ${pxToRem(24)} ${pxToRem(20)};

  ${mediaQuery.md} {
    padding: ${pxToRem(8)} ${pxToRem(16)};
    display: flex;
    justify-content: center;
  }
`

const LinkItem = styled.li`
  // TODO: Look at whether list is accessible as list-style-type: none removes number of options from screen reader
  list-style-type: none;
  font-family: ${font.brand};
  color: ${color.body};
  font-weight: ${fontWeight.bold};

  :after {
    display: block;
    content: '';
    border-bottom: solid 3px ${color.brand};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${mediaQuery.md} {
    padding: 0 ${pxToRem(20)};

    :last-child {
      margin-right: 0;
    }
  }
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${pxToRem(16)} 0;
  font-size: ${pxToRem(18)};
  color: ${color.grey[100]};

  ${mediaQuery.md} {
    font-size: ${pxToRem(16)};
    padding: 0 ${pxToRem(20)};
  }
`

export {
  Burger,
  CloseButton,
  BurgerSvg,
  CloseSvg,
  Nav,
  NavLogoWrapper,
  LinkList,
  LinkItem,
  StyledLink,
}
