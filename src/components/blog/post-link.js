/** @jsx jsx */
import {Styled, jsx} from "theme-ui"
import {Link} from "gatsby"
import useThemeColors from "../../hooks/useThemeColors";


const PostLink = ({title, slug, date, excerpt}) => {

    const { getThemeColor } = useThemeColors();

    return <article>
        <header>
            <Styled.h2
                sx={{
                    mb: 1,
                }}
            >
                <Styled.a
                    as={Link}
                    sx={{
                        textDecoration: `none`,
                        color: getThemeColor('titleTextColour')
                    }}
                    to={slug}
                >
                    {title || slug}
                </Styled.a>
            </Styled.h2>
            <small>{date}</small>
        </header>
        <section>
            <Styled.p>{excerpt}</Styled.p>
        </section>
    </article>
}

export default PostLink
