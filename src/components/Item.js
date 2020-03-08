import React from "react"
import styled from "styled-components"

const Image = styled.img`
  ${props => {
    if (props.rotate) {
      return {
        maxWidth: "100vw",
        maxHeight: "100vw",
      }
    } else {
      return {
        width: "100%",
        maxWidth: "100vw",
      }
    }
  }}
`

const ImageContainer = styled.div`
  max-width: 100vw;

  ${props => {
    if (props.rotate) {
      return {
        maxWidth: "100vw",
        maxHeight: "100vw",
        transform: `rotate(${props.rotate}deg)`,
      }
    }
  }}
`

const Title = title =>
  title
    .split("\n")
    .reduce((prev, curr) => [...prev, <br />, curr], [])
    .slice(1)

const Item = ({ page }) => {
  const title = Title(page.title)

  if (page.link) {
    return (
      <div>
        <h1>{title}</h1>
        <a href={page.link}>Link</a>
      </div>
    )
  }

  return (
    <div>
      <h1>{title}</h1>
      {page.urls.map(
        url => (
          <ImageContainer rotate={url.rotate} key={url.url}>
            <Image src={url.url} rotate={url.rotate} />
          </ImageContainer>
        )
        // url.rotate ? (
        // ) : (
        //   <Image key={url.url} src={url.url} />
        // )
      )}
    </div>
  )
}

export default Item
