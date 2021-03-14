import React from "react";
import {ThemeContext} from "../utils/theme-provider";

export const ThemeSelector = () => {
    const {colorMode, setColorMode} = React.useContext(ThemeContext);
    return (
        <label>
            <input
                type="checkbox"
                checked={colorMode === 'dark'}
                onChange={(ev) => {
                    setColorMode(ev.target.checked ? 'dark' : 'light');
                }}
            />{' '}
            Dark Toggle!!!!
        </label>
    );
};