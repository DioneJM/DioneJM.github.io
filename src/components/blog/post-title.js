import React from "react"
import { Styled } from "theme-ui"
import useThemeColors from "../../hooks/useThemeColors";

const PostTitle = (props) => {
    const { getThemeColor } = useThemeColors();
    return <Styled.h1 style={{
        color: getThemeColor('titleTextColour')
    }}{...props}/>
}

export default PostTitle
