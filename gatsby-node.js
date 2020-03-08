/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { data } = require("./src/data")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve(`./src/templates/main.js`)

  data.forEach((page, index) => {
    createPage({
      path: `/page-${index}`,
      component: template,
      context: { ...page, id: index, count: data.length },
    })
  })
}
