import React from "react"
import Helmet from "react-helmet";
import Layout from "../components/layout";
import {Styled} from "theme-ui";


export default function Home() {
    const [count, setCount] = React.useState(0);
    return <Layout>
        <Styled.h1>Hello from Gatsby!</Styled.h1>
        <div>
            <h2>Check out my <a rel="stylesheet" href={'/blog'}>blog</a></h2>
        </div>
        <button onClick={() => setCount(count + 1)}>{`Count: ${count}`}</button>
    </Layout>
}