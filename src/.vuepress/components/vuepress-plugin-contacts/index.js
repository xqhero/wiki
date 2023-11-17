const path = require('path')

module.exports = (options, context) => ({
  define () {
    const { linkTo } = options
    return {
      LINKTO: linkTo || '/about'
    }
  },
  name: 'vuepress-plugin-contacts',
  enhanceAppFiles: [
    path.resolve(__dirname, './enhanceAppFile.js')
  ],
  globalUIComponents: 'vuepress-plugin-contacts'
})
