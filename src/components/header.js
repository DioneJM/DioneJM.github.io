import React from 'react';
import styled from 'styled-components';

import {ThemeSelector} from "./theme-selector-button";
import {Link} from "gatsby";
import MobileOnly from "./media-queries/mobile-only";
import DesktopOnly from "./media-queries/desktop-only";
import HamburgerMenuButton from "./hamburger-menu";
import MENU_ITEMS from "./menu-items";
import FlexRow from "./flex/flex-row";

const Header = ({siteTitle}) => {
    const leftSide = <>
        <DesktopOnly>
            <StyledLink to="/">{siteTitle}</StyledLink>
        </DesktopOnly>
        <MobileOnly>
            {'✨Placeholder Logo✨'}
        </MobileOnly>
    </>
    const rightIcon = <>
        <MobileOnly>
            <HamburgerMenuButton/>
        </MobileOnly>
        <DesktopOnly>
            <ThemeSelector/>
        </DesktopOnly>
    </>
    return (
        <Wrapper>
            {leftSide}
            <DesktopOnly>
                <FlexRow>
                    {MENU_ITEMS.map(item => <MenuItemWrapper>{item}</MenuItemWrapper>)}
                </FlexRow>
            </DesktopOnly>
            {rightIcon}
        </Wrapper>
    );
};

const StyledLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
`

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 16px 0;
  position: sticky;
  top: -1px;
`;

const MenuItemWrapper = styled.div`
    padding: 0 8px 0 8px;
`;

export default Header;
