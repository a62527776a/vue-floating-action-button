module.exports = {
  base: '/vue-floating-action-button/homepage/',
  title: 'Hello VueFab',
  description: '好用的FloatingActionButton',
  head: [
    ['link', {
      async: 'async',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }],
    ['link', {
      async: 'async',
      rel: 'stylesheet',
      href: 'http://at.alicdn.com/t/font_808119_6y2mme98u07.css'
    }]
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-145663310-4'
    }]
  ],
  dest: 'docs/homepage/homepage',
  themeConfig: {
    repo: 'a62527776a/vue-floating-action-button',
    repoLabel: 'Github',
    sidebarDepth: 2,
    sidebar: [
      ['/', '介绍'],
      ['/basic', '基本使用'],
      ['/scroll', '滚动配置'],
      ['/animate', '动画配置'],
      ['/scrollAble', '关闭滚动自动隐藏'],
      ['/iconfont', '使用阿里巴巴iconfont']
    ]
  }
}