import Nav from "../components/Nav/Nav"
import styled from 'styled-components';


const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
`


const Layout = ({ children }) => (

    <>
        <Nav></Nav>
        <MainWrapper>{children}</MainWrapper>
    </>
    
    )



export default Layout