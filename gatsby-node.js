/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const path = require("path")

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()
  const cacheDirectory = `${program.directory}/.cache`
  const appFile = path.join(cacheDirectory, "production-app.js")
  const code = fs.readFileSync(appFile, {
    encoding: `utf-8`,
  })

  const key = "const { pagePath, location: browserLoc } = window"
  const newCode = code.replace(
    key,
    `${key}

  if (window.parent.location === browserLoc) return
`
  )

  fs.writeFileSync(appFile, newCode, `utf-8`)
}
