import React from "react";
import {ThemeContext} from "../utils/theme-provider";

export const ThemeSelector = () => {
    const {colorMode, setColorMode} = React.useContext(ThemeContext);
    const darkModeSelected = colorMode === 'dark';
    return (
        <label>
            <input
                type="checkbox"
                checked={darkModeSelected}
                onChange={(ev) => {
                    setColorMode(ev.target.checked ? 'dark' : 'light');
                }}
            />{' '}
            Dark Toggle!!!!
        </label>
    );
};