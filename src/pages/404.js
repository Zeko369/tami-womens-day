import React from "react"

import Layout from "../components/layout"
import Button from "../components/Button"

const NotFoundPage = () => (
  <Layout>
    <h1>STA SI SAD STISNULA POBOGU</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Button to="/">Ajmo nazad</Button>
  </Layout>
)

export default NotFoundPage
