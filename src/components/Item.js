import React from "react"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
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
      {page.urls.map(url => (
        <Image
          key={url.url}
          src={url.url}
          style={url.rotate ? { transform: `rotate(${url.rotate}deg)` } : {}}
        />
      ))}
    </div>
  )
}

export default Item
