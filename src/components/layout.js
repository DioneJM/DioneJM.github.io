import React from "react"
import Helmet from "./helmet/helmet";
import PropTypes from "prop-types"
import {useColorMode} from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import Header from "./blog/header";

const Layout = ({children, ...props}) => {
    const [colorMode] = useColorMode()

    return (
        <ThemeProvider>
            <Helmet/>
            <Header {...props}/>
            <div style={{
                mx: `auto`,
                px: 3,
                py: 4,
                margin: `3rem auto`,
                padding: `0 1rem`,
                maxWidth: 650,
            }}>
                <h3>Color Mode is: {colorMode}</h3>
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
