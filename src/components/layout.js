/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Progress from "./Progress"
import "./layout.css"
import Button from "./Button"

const GlobalStyles = createGlobalStyle`
  * { font-family: 'Nunito'; }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Main = styled.main`
  padding-top: 20px;
  max-width: 100vw;
`

const Container = styled.div`
  min-height: 100vh;
`

const Layout = ({ children, before, after, progress }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Container>
      <GlobalStyles />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {progress !== undefined && <Progress progress={progress} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Main>{children}</Main>
        <Footer>
          {before ? <Button to={before}>Back</Button> : <div></div>}
          {after ? <Button to={after}>Next</Button> : <div></div>}
        </Footer>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
