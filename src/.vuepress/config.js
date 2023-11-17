const nav = require('./configs/navConfig')
const sidebar = require('./configs/sidebarConfig')
const plugins = require('./configs/pluginsConfig')
module.exports = {
  title: "程序猿沉思录",
  description: "历经10余年的技术开发和沉淀, 记录每一次思考。通过专题和项目实战的方式，梳理解决方案，分享给需要的同学",
  theme: "reco",
  base: "/wiki/",
  themeConfig: {
    noFoundPageByTencent: false,
    nav: nav,
    sidebar: sidebar,
    sidebarDepth: 3,
    smoothScroll: true,
    lastUpdated: '上次更新',
    author: '有信仰的攻城狮',
    record: '京ICP备20030451号',
    startYear: '2017',
    vssueConfig: {
      showComment: true,
      platform: 'github',
      owner: 'xqhero',
      repo: 'myblog',
      clientId: 'aa9a2a8cf40583741580',
      clientSecret: '115a0f1ec6ebe03a2aa8528bfe53ecdaf824fdc4',
      autoCreateIssue: true,
    },
    repo: 'xqhero/wiki',
    editLinks: true,
    docsDir: 'src', // 编辑的文件夹
    editLinkText: '在 GitHub 上编辑此页'
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  plugins: plugins,
  extraWatchFiles: [
    '.vuepress/config.js', // 使用相对路径
  ],
};
