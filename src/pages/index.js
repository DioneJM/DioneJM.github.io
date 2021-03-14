import React from "react"
import Layout from "../components/layout";
import {cssVars} from "../utils/theme-provider";


export default function Home() {
    const [count, setCount] = React.useState(0);
    return <Layout>
        <div style={{
            color: cssVars.titleTextColour
        }}>Hello from Gatsby!</div>
        <div>
            <h2>Check out my <a rel="stylesheet" href={'/blog'}>blog</a></h2>
        </div>
        <button onClick={() => setCount(count + 1)}>{`Count: ${count}`}</button>
        <p>Lorem ipsumfoiwejfoiewjgoiewjoigejoigejoijoi</p>
    </Layout>
}