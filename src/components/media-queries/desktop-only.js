import styled from "styled-components";

const DesktopOnly = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

export default DesktopOnly;
