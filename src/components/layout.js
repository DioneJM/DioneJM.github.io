import React from "react"
import {ThemeProvider} from "../utils/theme-provider";
import {ThemeSelector} from "./theme-selector-button";
import Helmet from "./helmet";


export default function Layout({children}) {
    return (
        <ThemeProvider>
            <Helmet/>
            <div style={{
                mx: `auto`,
                px: 3,
                py: 4,
                margin: `3rem auto`,
                padding: `0 1rem`,
                maxWidth: 650,
            }}>
                <ThemeSelector/>
                {children}
            </div>
        </ThemeProvider>
    )
}
