import SVG from "./svg";
import React, {useState} from "react";
import styled from "styled-components";
import {Button, SwipeableDrawer} from "@material-ui/core";
import SideMenu from "./side-menu";

const HamburgerMenuIcon = () => <SVG xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
</SVG>

const HamburgerMenuButton = () => {
    const [showMenu, setShowMenu] = useState(false);
    return <Button onClick={() => setShowMenu(true)}>
        <HamburgerMenuIcon/>
        <StyledSwipeableDrawer anchor={'right'}
                               onClose={() => setShowMenu(false)}
                               onOpen={() => setShowMenu(true)}
                               open={showMenu}>
            <SideMenu/>
        </StyledSwipeableDrawer>
    </Button>
}

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    min-width: 70vw;
  }
`

export default HamburgerMenuButton;
