import {ThemeSelector} from "../../components/theme-selector-button";
import React from "react";
import {Grid as MuiGrid} from "@material-ui/core";
import HomeLink from "../website-links/home-link";
import PostLink from "../website-links/post-link";
import useThemeColors from "../../hooks/useThemeColors";

const HeaderInner = ({children, title, ...props}) => {
    return <header style={{
        position: 'sticky',
        top: 0,
        zIndex: '1',
        height: '5vh'
    }}>
        <Grid container fullHeight>
            <Grid item xs={4}/>
            <Grid container fullHeight item xs={4} direction={'row'} justify={'center'} alignItems={'center'}>
                {children}
            </Grid>
            <Grid container item fullHeight xs={4} direction={'row'} justify={'center'} alignItems={'center'}>
                <ThemeSelector/>
            </Grid>
        </Grid>
    </header>
}

const Header = (props) => {
    const headerLinks = [
        <HomeLink/>,
        <PostLink/>
    ];

    return <HeaderInner {...props} >
        {headerLinks.map((link, index) => {
            if (headerLinks[index + 1]) {
                return <Grid key={index} style={{
                    paddingRight: '4px',
                    marginRight: '4px',
                    borderRight: '2px solid',
                }}>
                    <Grid key={index}>
                        {link}
                    </Grid>
                </Grid>
            }
            return link;
        })}
    </HeaderInner>

}

const Grid = ({fullHeight, children, ...props}) => {
    return <MuiGrid style={{
        height: fullHeight ? '100%' : null
    }} {...props}>{children}</MuiGrid>
}

export default Header
