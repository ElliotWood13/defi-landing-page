import styled from 'styled-components'
import { pxToRem, color, fontWeight } from '../../../design'
import { Svg } from '../../../helpers/svgMapper'

const NavigationWrapper = styled.div`
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isActive &&
    `
      background: #000;
      box-shadow: 0px 0px 15px 13px #000;
      padding: ${pxToRem(20)};
  `}
`

const Burger = styled.button`
  border: none;
  background: #000;
  box-shadow: 0px 0px 15px 13px #000;
  padding: ${(props) => (props.isActive ? `${pxToRem(10)}` : '0')};
`

const BurgerMenu = styled.div`
  ${(props) =>
    props.isActive &&
    `
    transition: all 0.3s ease-in-out;
    transition-delay: 0.6s;
    transform: rotate(45deg);
  `}

  :hover {
    cursor: pointer;
  }
`

const BurgerMenuLine = styled.span`
  width: 30px;
  height: 3px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isActive &&
    `
    :nth-child(2) {
      width: 0px;
    }

    :nth-child(1) {
      transition-delay: 0.3s;
      transform: translateY(10px);
    }

    :nth-child(3) {
      transition-delay: 0.3s;
      transform: translateY(-13px) rotate(90deg);
    }
  `}
`

const CloseButton = styled.button`
  border: none;
  background: none;
`

const CloseSvg = styled(Svg)`
  height: ${pxToRem(40)};
  width: ${pxToRem(40)};
`

const Nav = styled.nav`
  visibility: ${(props) => (props.mobileMenuOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.mobileMenuOpen ? '1' : '0')};
  transition: all 0.2s ease;
`

const NavLogoWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: ${pxToRem(24)} ${pxToRem(20)};
`

const LinkList = styled.ul`
  background-color: ${color.black[100]};
`

const LinkItem = styled.li`
  // TODO: Look at whether list is accessible as list-style-type: none removes number of options from screen reader
  list-style-type: none;
  color: ${color.body};
  font-weight: ${fontWeight.bold};
  text-shadow: 0px 1px 8px ${color.grey[400]};

  :hover {
    text-shadow: 0px 1px 8px ${color.brand};
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
`

export {
  NavigationWrapper,
  Burger,
  BurgerMenu,
  BurgerMenuLine,
  CloseButton,
  CloseSvg,
  Nav,
  NavLogoWrapper,
  LinkList,
  LinkItem,
  StyledLink,
}
