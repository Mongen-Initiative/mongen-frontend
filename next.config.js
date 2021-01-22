const withCSS = require("@zeit/next-css")

module.exports = withCSS({
    target: 'serverless',
    env: {
      mongenCore: process.env.MONGEN_CORE_URL,
      mongenMedia: process.env.MONGEN_MEDIA_URL,
    },
  })
