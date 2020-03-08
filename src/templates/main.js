import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Item from "../components/Item"

const Main = ({ data }) => {
  const page = data.allSitePage.edges[0].node.context

  const before = page.id !== 0 ? `page-${page.id - 1}` : undefined
  const after = page.id !== page.count ? `page-${page.id + 1}` : undefined

  return (
    <Layout before={before} after={after}>
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
            count
            id
            title
            urls {
              url
              rotate
            }
          }
        }
      }
    }
  }
`

export default Main
