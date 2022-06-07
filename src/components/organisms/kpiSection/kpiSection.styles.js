import styled from 'styled-components'
import { mediaQuery, color, pxToRem, fontWeight } from '../../../design'

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const SectionGrid = styled.div`
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  padding: ${pxToRem(10)};

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, 20rem);
    grid-gap: ${pxToRem(20)};
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, 20rem);
    grid-gap: ${pxToRem(20)};
    row-gap: ${pxToRem(100)};
  }

  ${mediaQuery.lg} {
    grid-gap: ${pxToRem(50)};
    row-gap: ${pxToRem(100)};
  }
`

const KpiSectionCard = styled.div`
  padding-left: ${pxToRem(20)};
  padding-bottom: ${pxToRem(20)};
  box-shadow: -7px 6px 11px -7px ${color.brand};
  width: 100%;
  margin: 0 auto;
  background-color: transparent;

  &:not(:first-child) {
    margin-top: ${pxToRem(30)};
  }

  ${mediaQuery.xxxs} {
    width: 100%;
  }

  ${mediaQuery.sm} {
    &:not(:first-child) {
      margin-top: 0;
    }

    &:last-child {
      grid-column: 1 / 1;
    }
  }

  ${mediaQuery.md} {
    &:last-child {
      grid-column: auto;
    }
  }
`

const KpiSectionCardHeader = styled.h3`
  color: white;
  font-size: ${pxToRem(30)};
  font-weight: ${fontWeight.medium};
  margin-bottom: 10px;
  filter: drop-shadow(5px 3px 4px #9a9a9a);
`

const KpiSectionCardUl = styled.ul`
  list-style: none;
`

const KpiSectionCardLi = styled.li`
  font-size: ${pxToRem(16)};
  line-height: 1.5;
  color: lightgray;

  &:before {
    content: '+';
    margin-right: ${pxToRem(10)};
  }
`

const KpiSectionImage = styled.img`
  display: none;

  ${mediaQuery.sm} {
    display: block;
    position: absolute;
    width: 100%;
    height: auto;
    opacity: 0.3;
    margin-top: ${pxToRem(85)};
  }
`

export {
  SectionContainer,
  SectionGrid,
  KpiSectionCard,
  KpiSectionCardHeader,
  KpiSectionCardUl,
  KpiSectionCardLi,
  KpiSectionImage,
}
