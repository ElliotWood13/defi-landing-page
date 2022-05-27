import React, { useEffect, useState } from 'react'
import FocusTrap from 'focus-trap-react'
import {
  Burger,
  BurgerSvg,
  CloseButton,
  CloseSvg,
  Nav,
  NavLogoWrapper,
  LinkList,
  LinkItem,
  StyledLink,
} from './navigation.styles'
import { useScrollLock } from '../../../hooks'
import { useWindowResize } from '../../../hooks'
import { color } from '../../../design'

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [, setScrollLockActive] = useScrollLock()
  const [width] = useWindowResize()

  const links = [
    {
      id: '1',
      path: '#section1',
      name: 'Impact Defi',
    },
    {
      id: '2',
      path: '#section2',
      name: 'USP',
    },
    {
      id: '3',
      path: '#section3',
      name: 'Features',
    },
    {
      id: '4',
      path: '#section4',
      name: 'Team',
    },
    {
      id: '5',
      path: '#section5',
      name: 'Targets',
    },
    {
      id: '6',
      path: '#section6',
      name: 'About Us',
    },
  ]

  useEffect(() => {
    if (mobileMenuOpen) {
      setScrollLockActive(true)
    } else {
      setScrollLockActive(false)
    }
  }, [mobileMenuOpen, setScrollLockActive])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [width])

  return (
    <>
      <Burger
        aria-label="menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <BurgerSvg type="burger" fill={color.body} />
      </Burger>
      <FocusTrap active={mobileMenuOpen}>
        <Nav role="navigation" mobileMenuOpen={mobileMenuOpen}>
          <NavLogoWrapper>
            <CloseButton onClick={() => setMobileMenuOpen(false)}>
              <CloseSvg type="close" fill={color.body} />
            </CloseButton>
          </NavLogoWrapper>
          <LinkList id="menu">
            {links.map((link) => (
              <LinkItem
                key={link.id}
              >
                <StyledLink
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </StyledLink>
              </LinkItem>
            ))}
          </LinkList>
        </Nav>
      </FocusTrap>
    </>
  )
}
