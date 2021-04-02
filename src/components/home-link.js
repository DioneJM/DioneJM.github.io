import {css, Styled} from "theme-ui";
import {Link} from "gatsby";
import React from "react";

const HomeLink = () => {
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
                    color: `primary`,
                })}
                to={`/`}
            >
                {'Home'}
            </Styled.a>
        </Styled.h3>
    )
}

export default HomeLink;