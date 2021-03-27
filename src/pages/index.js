import React from "react"
import '@fontsource/inter';
import '@fontsource/karla';
import Layout from "../components/layout";
import {cssVars} from "../utils/theme-provider";


export default function Home() {
    const [count, setCount] = React.useState(0);
    return <Layout>
        <div style={{
            color: cssVars.titleTextColour
        }}>
            <div style={{
                fontFamily: cssVars.normalTextFont
            }}>
                Hello from Gatsby! This is in Inter
            </div>
            <div style={{
                fontFamily: cssVars.quoteTextFont
            }}>
                Hello from Gatsby! This is in Karla
            </div>
        </div>
        <div>
            <div>

                <h2>Check out my <a rel="stylesheet" href={'/blog'}>blog</a></h2>
            </div>
            <button onClick={() => setCount(count + 1)}>{`Count: ${count}`}</button>
            <p>Lorem ipsumfoiwejfoiewjgoiewjoigejoigejoijoi</p>
        </div>
    </Layout>
}