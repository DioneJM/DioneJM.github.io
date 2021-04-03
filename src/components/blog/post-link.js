import React from "react";

const PostLink = ({title, slug, date, excerpt}) => {

    return <article>
        <header>
            <h2>
                <a
                    style={{
                        textDecoration: `none`,
                        color: getThemeColor('titleTextColour')
                    }}
                    href={slug}
                >
                    {title || slug}
                </a>
            </h2>
            <small>{date}</small>
        </header>
        <section>
            <p>{excerpt}</p>
        </section>
    </article>
}

export default PostLink
