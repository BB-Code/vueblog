
module.exports = { //仓库地址
    base: '/vueblog/',  // 配合部署项目
    repo: 'https://bb-code.github.io/vueblog/',
    //theme: '@vuepress/blog',
    head: [
        // add jquert and fancybox
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    title: '笔记',
    description: 'web note',
    heroImage: '../logo.png',
    footer: '@copyright bobocode',
    lineNumbers: true,
    plugins: {
        run: {
            jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
            cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '友情链接', link: 'https://tideweb.xyz' },
        ],
        sidebar: [
            {
                title: 'flutter',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    { title: 'flutter环境搭建(window)', path: '/blog/flutter环境搭建' }
                ]
            }
        ]
    }
}