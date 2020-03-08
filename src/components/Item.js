import React from "react"

const Item = ({ page }) => {
  if (page.link) {
    return (
      <div>
        <h1>{page.title}</h1>
        <a href={page.link}>Link</a>
      </div>
    )
  }

  return (
    <div>
      <h1>{page.title}</h1>
      {page.urls.map(url => (
        <img
          src={url.url}
          style={url.rotate ? { transform: `rotate(${url.rotate}deg)` } : {}}
        />
      ))}
    </div>
  )
}

export default Item
