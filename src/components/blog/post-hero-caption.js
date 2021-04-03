import React from "react"

const PostHeroCaption = ({ text, url }) => (
  <>
    {text && (
      <div>
        {url ? (
          <a
            style={{ margin: `auto`, fontStyle: `italic` }}
            href={url}
            target="_blank"
          >
            {text}
          </a>
        ) : (
          <i style={{ margin: `auto` }}>{text}</i>
        )}
      </div>
    )}
  </>
)

export default PostHeroCaption
