module.exports = [
  { text: "首页", link: "/", icon: "reco-home" },
  {
    text: "应用专题",
    items: [
      { text: "UI&UX", link: '/books/design/'},
      { text: "前端开发", items: [
        {text: 'css', link:'/books/frontend/css/'},
        { text: "javascript", link:'/books/frontend/javascript/' },
        { text: 'typescript', link: '/books/frontend/typescript'},
        { text: "vue", link:'/books/frontend/vue/' },
        { text: "react", link:'/books/frontend/react/' },
      ]},
      {
        text: "后端开发",
        items: [
            { text: "Golang", link:'/books/backend/golang/' },
            { text: "java", link:'/books/backend/java/' },
            { text: "nodejs", link:'/books/frontend/nodejs/' },
        ]
      },
      {
        text: "数据存储",
        items: [
            { text: "mysql", link:'/books/storage/mysql/' },
            { text: "redis", link:'/books/storage/redis/' },
            { text: "elasticsearch", link:'/storage/elasticsearch/' },
        ]
      },
    ],
  },
  {
    text: "实战项目",
    icon: "reco-category",
    link: "/projects/",
    items: [
      {
        text: "vuepress搭建知识库",
        link: "/projects/vuepress/",
        icon: "reco-color",
      },
      {
        text: "药师在线教育Saas平台",
        link: "/projects/eduction/",
        icon: "reco-color",
      },
      {
        text: "公益募捐Saas平台",
        link: "/projects/donation/",
        icon: "reco-color",
      },
      {
        text: "AI图床创作平台",
        link: "/projects/creation/",
        icon: "reco-color",
      },
    ],
  },
  {
    text: "数据结构与算法",
    link: "/algorithm/",
  },
  {
    text: "运维与网络",
    items: [
      { text: "操作系统", link:'/books/devops/operationSystem/' },
      {
        text: '运维支撑',
        items: [
            { text: "openrestry", link:'/books/devops/openrestry/' },
            { text: "ELK日志", link:'/books/devops/elk/' },
            { text: "K8S", link:'/books/devops/k8s/' },
        ]
      },
      {
        text: '网络与协议',
        items: [
            { text: "计算机网络", link:'/books/devops/openrestry/' },
            { text: "HTTP协议", link:'/books/devops/elk/' },
        ]
      }
    ]
  },
  {
    text: "文档与工具",
    items: [
      { text: "文档", link:'/archive/' },
      { text: "工具", link:'/tools/' },
    ]
  },
  {
    text: "关于我",
    items: [
      { text: "关于我", link: "/abouts/" },
      { text: "我的自白书", link: "/abouts/" },
      {
        text: "关注我",
        items: [
          { text: "Github", link: "https://github.com/mqyqingfeng" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/712139234359183/posts",
          },
          {
            text: "知乎",
            link: "https://juejin.cn/user/712139234359184/posts",
          },
          {
            text: "微信公众号",
            link: "https://juejin.cn/user/712139234359185/posts",
          },
        ]
      }
    ],
  },
];