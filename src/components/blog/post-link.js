/** @jsx jsx */
import {Styled, jsx} from "theme-ui"
import {Link} from "gatsby"
import {cssVars} from "../../utils/theme-provider";

const PostLink = ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <Styled.h2
        sx={{
          mb: 1,
        }}
        style={{color: cssVars.titleTextColour}}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `underline`,
          }}
          to={slug}
          style={{color: cssVars.titleTextColour}}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small style={{color: cssVars.normalTextColour}}>{date}</small>
    </header>
    <section>
      <Styled.p style={{color: cssVars.normalTextColour}}>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink
