import React from "react"
import { Styled } from "theme-ui"
import {cssVars} from "../../utils/theme-provider";

const PostTitle = (props) => <Styled.h1 {...props} style={{
    color: cssVars.titleTextColour
}}/>

export default PostTitle
