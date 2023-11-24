module.exports = {
  "/projects/donation/": [
    {
        title: "项目概述",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          { title: "项目简介", path: "./index.html"},
        ],
    },
    {
      title: "业务需求",
      path: '',
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2, // 可选的, 默认值是 1
      children: [
        { title: "需求列表", path: "01.background" },
        { title: "业务流程", path: "02.business" },
      ],
    },
    {
        title: "顶层设计(DDD)",
        path: '',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          { title: "业务架构", path: "03.业务架构" },
          { title: "技术架构", path: "04.技术架构" },
          { title: "数据架构", path: "05.数据架构" },
        ],
      },
      {
        title: "微服务解决方案",
        path: '',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          { title: "总体设计", path: "06.微服务解决方案" },
          { title: "支付网关", path: "07.支付网关" },
          { title: "证书中心", path: "10.证书中心" },
          { title: "序列中心", path: "13.序列生成中心" },
          { title: "资源中心", path: "08.资源中心" },
          { title: "消息中心", path: "09.消息中心" },
          { title: "聚合中心", path: "11.搜索统计中心" },
          { title: "任务中心", path: "12.定时任务" },
        ],
      },
      {
        title: "业务中台",
        path: '',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          { title: "api融合", path: "06.微服务解决方案" }
        ],
      }

  ],
  "/tools/": [
        {
            title: '必知必会工具',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                ['', "写在前面" ]
            ]
        },
        {
            title: '前端必会工具',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                { title: "NPM", path: "frontend/02.npm" },
                { title: "Yarn", path: "frontend/03.yarn" },
                { title: "Pnpm", path: "frontend/04.pnpm" },
                { title: "webpack", path: "frontend/05.webpack" },
                { title: "rollup", path: "frontend/06.rollup" },
                { title: "vite", path: "frontend/07.vite" },
            ]
        },
        {
            title: '后端必会工具',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                { title: "npm", path: "06.微服务解决方案" }
            ]
        },
        {
            title: '文档必会工具',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                { title: "markdown", path: "doc/01.markdown" }
            ]
        },
        {
            title: '代码管理工具',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                { title: "npm", path: "06.微服务解决方案" }
            ]
        }
    ],
};
