import {ThemeSelector} from "../../components/theme-selector-button";
import React from "react";
import {Grid as MuiGrid} from "@material-ui/core";
import PostLink from "../website-links/post-link";
import LogoLink from "../website-links/logo-link";

const HeaderInner = ({children, title, ...props}) => {
    return <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 5,
        height: '10vh'
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

    return <HeaderInner {...props}>
        {headerLinks.map((link, index) => {
            if (headerLinks[index + 1]) {
                return <div key={index} style={{
                    paddingRight: '26px',
                }}>
                    <div key={index}>
                        {link}
                    </div>
                </div>
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
