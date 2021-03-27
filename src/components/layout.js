import React from "react"
import {cssVars, ThemeProvider} from "../utils/theme-provider";
import {ThemeSelector} from "./theme-selector-button";
import {Helmet} from "react-helmet";


export default function Layout({children}) {
    return (
        <ThemeProvider>
            <Helmet>
                <style>{`body { background-color: ${cssVars.backgroundColor}; }`}</style>
            </Helmet>
            <div style={{
                minHeight: `100vh`,
                backgroundColor: cssVars.backgroundColor,
            }}>
                <div style={{
                    margin: `3rem auto`,
                    maxWidth: '33vw',
                    padding: `0 1rem`,
                    color: cssVars.normalTextColour,
                }}>
                    <ThemeSelector/>
                    {children}
                </div>
            </div>
        </ThemeProvider>
    )
}