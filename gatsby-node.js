const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allPrismicProjects {
        nodes {
          uid
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.uid}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        uid: project.uid,
      },
    })
  })
}
