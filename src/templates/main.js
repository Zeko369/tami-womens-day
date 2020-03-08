import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Item from "../components/Item"

const Main = ({ data }) => {
  const {
    page,
    before,
    after,
    progress,
  } = data.allSitePage.edges[0].node.context

  return (
    <Layout before={before} after={after} progress={progress}>
      <Item page={page} />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            progress
            page {
              title
              link
              urls {
                url
                rotate
              }
            }
            before
            after
          }
        }
      }
    }
  }
`

export default Main
