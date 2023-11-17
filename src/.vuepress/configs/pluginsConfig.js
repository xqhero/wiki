module.exports = [
    [
      'copyright',
      {
        authorName: '有信仰的攻城狮', // 选中的文字将无法被复制
        minLength: 0, // 如果长度超过  30 个字符
      }
    ],
    ['vuepress-plugin-code-copy', true],
    [
        '@vuepress-reco/vuepress-plugin-back-to-top',
        {
            linkTo: '/abouts/'
        }
    ]
    // {
    //     name:"about",
    //     globalUIComponents:["about"], 
    // },
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   width: '300px', // 默认 260px
    //   title: '消息提示',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '添加冴羽好友入前端交流群',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: 'https://cdn.jsdelivr.net/gh/mqyqingfeng/picture/IMG_3516.JPG'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     } 
    //   ]
    // }]
]