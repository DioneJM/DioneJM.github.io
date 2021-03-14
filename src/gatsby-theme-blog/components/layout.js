import React from "react"
import Header from "./header"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"
import {SkipNavContent} from "@reach/skip-nav"
import {cssVars, ThemeProvider} from "../../utils/theme-provider";
import {ThemeSelector} from "../../components/theme-selector-button";

const BlogLayout = ({children, ...props}) => {
    const blogThemeConfig = useBlogThemeConfig()
    const {webfontURL} = blogThemeConfig

    return (
        <ThemeProvider>
            <Helmet>
                <link rel="stylesheet" href={webfontURL}/>
            </Helmet>
            <Header {...props} />
            <SkipNavContent/>
            <ThemeSelector/>
            <div style={{
                minHeight: `100vh`,
                backgroundColor: cssVars.backgroundColor,
            }}>
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
            </div>
        </ThemeProvider>
    )
}

export default BlogLayout
