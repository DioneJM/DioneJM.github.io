import React from "react"
import {Link} from "gatsby"
import {css, Styled, Flex} from "theme-ui"

import Bio from "./bio"
import {cssVars} from "../../utils/theme-provider";

const PostFooter = ({previous, next}) => (
    <footer
        css={css({
            mt: 4,
            pt: 3,
        })}
    >
        <Styled.hr/>
        <Bio/>
        {(previous || next) && (
            <Flex
                as="ul"
                css={css({
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                })}
            >
                <li>
                    {previous && (
                        <Styled.a as={Link}
                                  to={previous.slug}
                                  style={{color: cssVars.linkColour}}
                                  rel="prev">
                            ← {previous.title}
                        </Styled.a>
                    )}
                </li>
                <li>
                    {next && (
                        <Styled.a as={Link}
                                  to={next.slug}
                                  style={{color: cssVars.linkColour}}
                                  rel="next">
                            {next.title} →
                        </Styled.a>
                    )}
                </li>
            </Flex>
        )}
    </footer>
)

export default PostFooter
