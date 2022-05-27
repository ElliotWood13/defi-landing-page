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

export const Navigation = React.forwardRef((props, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [, setScrollLockActive] = useScrollLock()
  const [width] = useWindowResize()
  const {
    brandSectionRef,
    uspSectionRef,
    featuresSectionRef,
    teamSectionRef,
    targetsSectionRef,
    countdownSectionRef,
  } = ref.current

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  
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
  console.log(links);

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
                  href='#'
                  onClick={() => { 
                    handleScroll(link.ref)
                    setMobileMenuOpen(false)
                  }}
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
})
