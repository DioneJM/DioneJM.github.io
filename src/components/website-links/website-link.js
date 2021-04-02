import {css, Styled} from "theme-ui";
import {Link} from "gatsby";
import React from "react";
import useThemeColors from "../../hooks/useThemeColors";

const WebsiteLink = ({ route, label }) => {
    const { getThemeColor } = useThemeColors();
    return (
        <Styled.h3
            as="p"
            css={css({
                my: 0,
            })}
        >
            <Styled.a
                as={Link}
                css={css({
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: getThemeColor('linkColour'),
                })}
                to={route}
            >
                {label}
            </Styled.a>
        </Styled.h3>
    )

}

export default WebsiteLink;