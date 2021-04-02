import React from "react"
import Header from "./header"
import Helmet from "../helmet/helmet";
import {ThemeProvider, useThemeUI, useColorMode} from 'theme-ui'


const BlogLayout = ({children, ...props}) => {
    const [colorMode, setColorMode] = useColorMode()

    const {theme: {initialColorModeName, colors: {modes}}} = useThemeUI()
    const modeKeys = Object.keys(modes)
    const allModes = [initialColorModeName, ...modeKeys]

    return (
        <ThemeProvider>
            <Helmet/>
            <Header {...props} />
            <div style={{
                mx: `auto`,
                px: 3,
                py: 4,
                margin: `3rem auto`,
                padding: `0 1rem`,
                maxWidth: 650,
            }}>
                <h3>Color Mode is: {colorMode}</h3>
                <select onChange={e => {
                    setColorMode(e.target.value)
                }} value={colorMode}>
                    {allModes.map(mode => (
                        <option value={mode} key={mode}>{mode}</option>
                    ))}
                </select>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default BlogLayout
