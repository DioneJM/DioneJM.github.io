import {ThemeSelector} from "../../components/theme-selector-button";
import React from "react";
import {Grid as MuiGrid} from "@material-ui/core";
import HomeLink from "../website-links/home-link";
import PostLink from "../website-links/post-link";
import useThemeColors from "../../hooks/useThemeColors";
import LogoLink from "../website-links/logo-link";

const HeaderInner = ({children, title, ...props}) => {
    const {getThemeColor} = useThemeColors();
    return <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 5,
        height: '10vh',
        backgroundColor: getThemeColor('backgroundColor')
    }}>
        <Grid container fullHeight>
            <Grid container item xs={3} direction={'row'} justify={'center'} alignItems={'center'}>
                <LogoLink/>
            </Grid>
            <Grid container fullHeight item xs={5} direction={'row'} justify={'flex-start'} alignItems={'center'}>
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
        <PostLink/>
    ];

    return <HeaderInner {...props} >
        {headerLinks.map((link, index) => {
            if (headerLinks[index + 1]) {
                return <Grid key={index} style={{
                    paddingRight: '26px',
                    // marginRight: '4px',
                    // borderRight: '2px solid',
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
