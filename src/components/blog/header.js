import {ThemeSelector} from "../../components/theme-selector-button";
import React from "react";
import {Grid as MuiGrid} from "@material-ui/core";

const Header = ({children, title, ...props}) => {
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

const Grid = ({fullHeight, children, ...props}) => {
    return <MuiGrid style={{
        height: fullHeight ? '100%' : null
    }} {...props}>{children}</MuiGrid>
}

export default Header
