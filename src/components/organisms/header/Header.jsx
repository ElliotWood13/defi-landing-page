import { HeaderWrapper, HeaderPosition } from './header.styles'
import { Navigation } from '../navigation'

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderPosition>
                <Navigation />
            </HeaderPosition>
        </HeaderWrapper>
    )
}