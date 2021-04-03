/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import useThemeColors from "../../hooks/useThemeColors";

const PostTitle = (props) => {
    return <Styled.h1 sx={{
    }}{...props}/>
}

export default PostTitle
