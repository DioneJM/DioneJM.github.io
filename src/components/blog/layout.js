import React from "react"
import Header from "./header"
import Helmet from "../helmet/helmet";
import {ThemeProvider, useThemeUI, useColorMode} from 'theme-ui'
import HomeLink from "../home-link";


const BlogLayout = ({children, ...props}) => {
    const [colorMode] = useColorMode()

    return (
        <ThemeProvider>
            <Helmet/>
            <Header {...props} >
                <HomeLink/>
            </Header>
            <div style={{
                mx: `auto`,
                px: 3,
                py: 4,
                margin: `3rem auto`,
                padding: `0 1rem`,
                maxWidth: 650,
            }}>
                <h3>Color Mode is: {colorMode}</h3>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default BlogLayout
