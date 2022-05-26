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
import { uid } from '../../../helpers'
import { useScrollLock } from '../../../hooks'
import { useWindowResize } from '../../../hooks'
import { color } from '../../../design'

// TODO: Add any hidden labels required for a11y

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [, setScrollLockActive] = useScrollLock()
  const [width] = useWindowResize()

  const links = [
    {
      path: '#section1',
      name: 'Section 1',
    },
    {
      path: '#section2',
      name: 'Section 2',
    },
    {
      path: '#section3',
      name: 'Section 3',
    },
    {
      path: '#section4',
      name: 'Section 4',
    },
    {
      path: '#section5',
      name: 'Section 5',
    },
    {
      path: '#section6',
      name: 'Section 6',
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
              <CloseSvg type="close" />
            </CloseButton>
          </NavLogoWrapper>
          <LinkList id="menu">
            {links.map((link) => (
              <LinkItem
                key={uid()}
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
