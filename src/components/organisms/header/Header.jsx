import { HeaderWrapper, HeaderPosition } from './header.styles'

export const Header = ({ children }) => {
    return (
        <HeaderWrapper>
            <HeaderPosition>
                { children }
            </HeaderPosition>
        </HeaderWrapper>
    )
}