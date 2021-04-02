import React from "react"
import Header from "./header"
import Helmet from "../helmet/helmet";
import {Grid} from "@material-ui/core";
import {ThemeProvider, useColorMode} from "theme-ui";


const BlogLayout = ({children, ...props}) => {
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
                {children}
            </div>
        </ThemeProvider>
    )
}

export default BlogLayout
