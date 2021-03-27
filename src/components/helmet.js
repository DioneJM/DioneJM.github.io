import React from "react";
import {ThemeContext} from "../utils/theme-provider";
import {Helmet as ReactHelmet} from "react-helmet";
import {darkTheme, lightTheme} from "../gatsby-plugin-theme-ui";

const Helmet= () => {
    const {colorMode} = React.useContext(ThemeContext);
    const darkModeSelected = colorMode === 'dark';

    if (darkModeSelected) {
        return <ReactHelmet>
            <style>{`body { background-color: ${darkTheme.background}; }`}</style>
        </ReactHelmet>

    }

    return <ReactHelmet>
        <style>{`body { background-color: ${lightTheme.background}; }`}</style>
    </ReactHelmet>
}

export default Helmet;