import React from "react";
import {ThemeContext} from "../utils/theme-provider";
import {Helmet as ReactHelmet} from "react-helmet";
import {darkTheme, lightTheme} from "../gatsby-plugin-theme-ui";

const Helmet = () => {
    const {colorMode} = React.useContext(ThemeContext);
    const darkModeSelected = colorMode === 'dark';

    const backgroundColor = darkModeSelected ? darkTheme.background : lightTheme.background;
    const accentColor = darkModeSelected ? darkTheme.accent : lightTheme.accent;

    const style = () => {
        return <style>
            {`
                body { background-color: ${backgroundColor}; }
            `}
        </style>

    }

    return <ReactHelmet>
        {style()}
    </ReactHelmet>
}

export default Helmet;