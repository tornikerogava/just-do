import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
`

export default function Nav() {
    return (
        <nav>
            <h1>Just Do</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
