import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Button from "../components/Button"

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`

const IndexPage = () => (
  <Layout>
    <h1>Startan dan zena, ili sta god da je danas</h1>
    <ButtonContainer>
      <Button to="/image-0">Begin</Button>
    </ButtonContainer>
  </Layout>
)

export default IndexPage
