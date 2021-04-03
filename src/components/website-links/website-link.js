/** @jsx jsx */
import {jsx, css, Styled} from "theme-ui";
import {Link} from "gatsby";
import React from "react";

const WebsiteLink = ({ route, label }) => {
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
                    color: 'highlight',
                    fontWeight: 'bold',
                })}
                to={route}
            >
                {label}
            </Styled.a>
        </Styled.h3>
    )

}

export default WebsiteLink;