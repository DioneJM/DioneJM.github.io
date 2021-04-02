import React from "react"
import Header from "./header"
import {ThemeProvider} from "../../utils/theme-provider";
import Helmet from "../../components/helmet";

const BlogLayout = ({children, ...props}) => {

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
                {children}
            </div>
        </ThemeProvider>
    )
}

export default BlogLayout
