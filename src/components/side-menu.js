import React from "react";
import styled from "styled-components";
import {ThemeSelector} from "./theme-selector-button";
import MENU_ITEMS from "./menu-items";

const SideMenu = () => {
    return <SideMenuBody>
        <MenuTitle>
        <h1>Menu</h1>
            <ThemeSelector/>
        </MenuTitle>
        {MENU_ITEMS.map(item => item)}
    </SideMenuBody>
}

const SideMenuBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--color-background);
  width: 100%;
  height: 100%;
`

const MenuTitle = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default SideMenu;