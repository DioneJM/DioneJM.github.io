import React from "react"
import Helmet from "./helmet/helmet";
import PropTypes from "prop-types"
import {useThemeUI, useColorMode} from 'theme-ui'
import { ThemeProvider } from 'theme-ui'

const Layout = ({children}) => {
    const [colorMode, setColorMode] = useColorMode()

    const {theme: {initialColorModeName, colors: {modes}}} = useThemeUI()
    const modeKeys = Object.keys(modes)
    const allModes = [initialColorModeName, ...modeKeys]

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
                <h3>Color Mode is: {colorMode}</h3>
                <select onChange={e => {
                    setColorMode(e.target.value)
                }} value={colorMode}>
                    {allModes.map(mode => (
                        <option value={mode} key={mode}>{mode}</option>
                    ))}
                </select>
                <div>
                    <main>{children}</main>
                </div>
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
