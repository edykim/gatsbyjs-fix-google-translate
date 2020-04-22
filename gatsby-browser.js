/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const ReactDOM = require("react-dom")

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    debugger
    if (
      window.location === window.parent.location &&
      window.location.host !== "translate.googleusercontent.com"
    )
      ReactDOM.hydrate(element, container, callback)
  }
}
