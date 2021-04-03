import React from "react"

import Bio from "./bio"

const PostFooter = ({previous, next}) => (
    <footer>
        <hr/>
        <Bio/>
        {(previous || next) && (
            <ul
                style={{
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
            >
                <li>
                    {previous && (
                        <a
                                  href={previous.slug}
                                  rel="prev">
                            ← {previous.title}
                        </a>
                    )}
                </li>
                <li>
                    {next && (
                        <a
                                  href={next.slug}
                                  rel="next">
                            {next.title} →
                        </a>
                    )}
                </li>
            </ul>
        )}
    </footer>
)

export default PostFooter
