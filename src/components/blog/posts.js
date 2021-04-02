import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import Footer from "./home-footer"
import PostList from "./post-list"

const Posts = ({location, posts, siteTitle, socialLinks}) => (
    <Layout location={location} title={siteTitle}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 'inherit',
        }}>
            <div>
                <SEO title="Home"/>
                <main>
                    <PostList posts={posts}/>
                </main>
            </div>
            <div>
                <Footer socialLinks={socialLinks}/>
            </div>
        </div>
    </Layout>
)

export default Posts
