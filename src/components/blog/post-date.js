/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import {cssVars} from "../../utils/theme-provider";

const PostDate = (props) => (
  <Styled.p
    sx={{
      fontSize: 1,
      mt: -3,
      mb: 3,
        color: cssVars.normalTextColour
    }}
    {...props}
  />
)

export default PostDate
