import React from "react"

export default function Layout({ children }) {
    return (
        <div style={{
            margin: `3rem auto`,
            maxWidth: 650,
            padding: `0 1rem`,
            minHeight: `100vh`
        }}>
            {children}
        </div>
    )
}