import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

const SectionContainer = styled.div`
    color: #ffffff;
    display: grid;
    grid-template-columns: repeat(1, 100%);

    ${mediaQuery.sm} {
        grid-template-columns: repeat(2, 20rem);
        grid-gap: 10px;
    }

    ${mediaQuery.md} {
        grid-template-columns: repeat(4, 15rem);
    }
`

const KpiSectionCard = styled.div`
    padding-left: 20px;
    padding-bottom: 20px;
    border-left: 1px solid rgba(255, 255, 0, .5);
    border-bottom: 1px solid rgba(255, 255, 0, .5);
    width: 100%;
    margin: 0 auto;

    &:not(:first-child) {
        margin-top: 30px;
    }

    ${mediaQuery.xxxs} {
        width: 200px;
    }

    ${mediaQuery.sm} {
        &:not(:first-child) {
            margin-top: 0;
    }
`

const KpiSectionCardHeader = styled.h3`
    color: white;
    font-size: 30px;
    font-weight: 500;
    /* font-family: font.brand; */
    margin-bottom: 10px;
`

const KpiSectionCardUl = styled.ul`
    list-style: none;
`

const KpiSectionCardLi = styled.li`
    font-size: 16px;
    line-height: 1.5;

    &:before {
        content: '+';
        margin-right: 10px;
    }
`

export {
    SectionContainer,
    KpiSectionCard,
    KpiSectionCardHeader,
    KpiSectionCardUl,
    KpiSectionCardLi,
}