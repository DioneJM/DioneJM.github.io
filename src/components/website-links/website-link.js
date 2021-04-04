import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const WebsiteLink = ({route, label}) => {
    return (
        <h3>
            <StyledLink to={route}>
                {label}
            </StyledLink>
        </h3>
    )
}

const StyledLink = styled(Link)`
    color: var(--color-text);
`

export default WebsiteLink;