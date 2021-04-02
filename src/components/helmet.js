import React from "react";
import {cssVars} from "../utils/theme-provider";
import {Helmet as ReactHelmet} from "react-helmet";
import {darkTheme, lightTheme} from "../gatsby-plugin-theme-ui";

const Helmet = () => {

    const style = () => {
        return <style>
            {`
                body { background-color: ${lightTheme.background}; }
            `}
        </style>

    }

    return <ReactHelmet>
        {style()}
    </ReactHelmet>
}

export default Helmet;