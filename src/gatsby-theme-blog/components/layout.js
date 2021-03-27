import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"
import {SkipNavContent} from "@reach/skip-nav"
import {cssVars, ThemeProvider} from "../../utils/theme-provider";

const BlogLayout = ({children, ...props}) => {

    return (
        <ThemeProvider>
            <Helmet>
                <style>{`body { background-color: ${cssVars.backgroundColor}; }`}</style>
            </Helmet>
            <Header {...props} />
            <SkipNavContent/>
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
