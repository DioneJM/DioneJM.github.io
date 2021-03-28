import React from "react";
import {cssVars} from "../utils/theme-provider";
import {Helmet as ReactHelmet} from "react-helmet";

const Helmet = () => {

    const style = () => {
        return <style>
            {`
                body { background-color: ${cssVars.backgroundColor}; }
            `}
        </style>

    }

    return <ReactHelmet>
        {style()}
    </ReactHelmet>
}

export default Helmet;