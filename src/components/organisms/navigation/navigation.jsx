import React, { useEffect, useState } from 'react'
// import FocusTrap from 'focus-trap-react'
import {
  NavigationWrapper,
  Burger,
  BurgerMenu,
  BurgerMenuLine,
  Nav,
  LinkList,
  LinkItem,
  StyledLink,
} from './navigation.styles'
import { useWindowResize } from '../../../hooks'

export const Navigation = React.forwardRef(({ handleScroll }, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [width] = useWindowResize()
  const {
    brandSectionRef,
    uspSectionRef,
    featuresSectionRef,
    teamSectionRef,
    targetsSectionRef,
    countdownSectionRef,
  } = ref.current

  const links = [
    {
      id: '1',
      name: 'Impact Defi',
      ref: brandSectionRef,
    },
    {
      id: '2',
      name: 'USP',
      ref: uspSectionRef,
    },
    {
      id: '3',
      name: 'Features',
      ref: featuresSectionRef,
    },
    {
      id: '4',
      name: 'Team',
      ref: teamSectionRef,
    },
    {
      id: '5',
      name: 'Targets',
      ref: targetsSectionRef,
    },
    {
      id: '6',
      name: 'About Us',
      ref: countdownSectionRef,
    },
  ]

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [width])

  return (
    <NavigationWrapper isActive={mobileMenuOpen}>
      <Burger
        aria-label="menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="menu"
        onClick={() => setMobileMenuOpen(prevState => !prevState)}
      >
        <BurgerMenu isActive={mobileMenuOpen}>
          <BurgerMenuLine isActive={mobileMenuOpen}></BurgerMenuLine>
          <BurgerMenuLine isActive={mobileMenuOpen}></BurgerMenuLine>
          <BurgerMenuLine isActive={mobileMenuOpen}></BurgerMenuLine>
        </BurgerMenu>
      </Burger>
      <Nav mobileMenuOpen={mobileMenuOpen}>
        <LinkList id="menu">
        {links.map((link) => (
          <LinkItem
            key={link.id}
          >
            <StyledLink
              href={`#${link.name}`}
              onClick={() => {
                setMobileMenuOpen(false)
                handleScroll(link.ref)
              }}
            >
              {link.name}
            </StyledLink>
          </LinkItem>
        ))}
        </LinkList>
      </Nav>
    </NavigationWrapper>
  )
})
