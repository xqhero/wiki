module.exports = [
    [
      'copyright',
      {
        authorName: '有信仰的攻城狮', // 选中的文字将无法被复制
        minLength: 0, // 如果长度超过  30 个字符
      }
    ],
    [
      'vuepress-plugin-code-copy', 
      true
    ],
    [
        require("../components/vuepress-plugin-contacts"),
        {
          linkTo: '/abouts/'
        }
    ],
]