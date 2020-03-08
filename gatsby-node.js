/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { data } = require("./src/data")

const slug = id => `/image-${id}`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve(`./src/templates/main.js`)

  data.forEach((page, index) => {
    const before = index !== 0 ? slug(index - 1) : undefined
    const after = slug(index + 1)

    createPage({
      path: slug(index),
      component: template,
      context: {
        page,
        before,
        after,
        progress: Math.ceil((index / data.length) * 100),
      },
    })
  })

  createPage({
    path: slug(data.length),
    component: path.resolve(`./src/templates/lastPage.js`),
  })
}
