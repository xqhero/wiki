module.exports = {
  "/projects/": [
    {
      title: "vuepress搭建知识库",
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [
        { title: "前言", path: "/projects/vuepress/" },
        encodeURI("/projects/vuepress/01.vuepress简介"),
        encodeURI("/projects/vuepress/02.vuepress搭建"),
      ],
    },
    {
      title: "药师在线教育Saas平台",
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [
        encodeURI("/projects/vuepress/01.vuepress简介"),
        encodeURI("/projects/vuepress/02.vuepress搭建"),
      ],
    },
    {
      title: "公益募捐Saas平台",
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [
        encodeURI("/projects/vuepress/01.vuepress简介"),
        encodeURI("/projects/vuepress/02.vuepress搭建"),
      ],
    },
    {
      title: "AI图床创作平台",
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2, // 可选的, 默认值是 1
      children: [
        encodeURI("/projects/vuepress/01.vuepress简介"),
        encodeURI("/projects/vuepress/02.vuepress搭建"),
      ],
    },
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
