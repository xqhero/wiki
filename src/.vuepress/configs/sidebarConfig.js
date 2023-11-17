module.exports = {
  "/projects/donation/": [
    {
      title: "公益募捐Saas平台",
      path: '',
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2, // 可选的, 默认值是 1
      children: [
        { title: "需求列表", path: "01.background" },
        { title: "业务流程", path: "02.business" },
      ],
    }
  ],
  "/tools/": [
    {
      title: "工具",
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [
        { title: "Markdown", path: "/tools/tool/01.markdown" },
        {
          title: "Git",
          collapsable: true,
          children: [{ title: "Git使用手册", path: "/tools/tool/git/01.git" }],
        },
      ],
    },
    {
      title: "文档",
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2, // 可选的, 默认值是 1
      children: [{ title: "api文档", path: "/tools/archive/01.api" }],
    },
  ],
};
