import React from "react"
import {cssVars, ThemeContext, ThemeProvider} from "../utils/theme-provider";
import {ThemeSelector} from "./theme-selector-button";
import Helmet from "./helmet";


export default function Layout({children}) {
    return (
        <ThemeProvider>
            <Helmet/>
            <div style={{
                margin: `3rem auto`,
                maxWidth: '33vw',
                padding: `0 1rem`,
                color: cssVars.normalTextColour,
            }}>
                <ThemeSelector/>
                {children}
            </div>
        </ThemeProvider>
    )
}
