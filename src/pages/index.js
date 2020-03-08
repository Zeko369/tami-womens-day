import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { data } from "../data"

import Item from "../components/Item"

const IndexPage = () => (
  <Layout>
    {data.map(item => (
      <Item page={item} />
    ))}
  </Layout>
)

export default IndexPage
