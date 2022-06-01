import styled from 'styled-components'
import { mediaQuery } from '../../../design'

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

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, 20rem);
    grid-gap: 20px;
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, 20rem);
    grid-gap: 20px;
    row-gap: 100px;
  }

  ${mediaQuery.lg} {
    grid-gap: 50px;
    row-gap: 100px;
  }
`

const KpiSectionCard = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  border-left: 1px solid rgba(255, 255, 0, 0.5);
  border-bottom: 1px solid rgba(255, 255, 0, 0.5);
  width: 100%;
  margin: 0 auto;
  background-color: transparent;

  &:not(:first-child) {
    margin-top: 30px;
  }

  ${mediaQuery.xxxs} {
    width: 200px;
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
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`

const KpiSectionCardUl = styled.ul`
  list-style: none;
`

const KpiSectionCardLi = styled.li`
  font-size: 16px;
  line-height: 1.5;
  color: lightgray;

  &:before {
    content: '+';
    margin-right: 10px;
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
    margin-top: 85px;
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
