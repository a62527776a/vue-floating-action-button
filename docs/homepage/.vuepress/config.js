module.exports = {
  base: '/vue-dialog-x/vuepress/',
  title: 'Hello VueFloatingActionButton',
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
      href: '//at.alicdn.com/t/font_808119_6y2mme98u07.css'
    }]
  ],
  dest: 'docs/homepage/dist',
  themeConfig: {
    repo: 'a62527776a/vue-dialog-x',
    repoLabel: 'Github',
    sidebarDepth: 2,
    sidebar: [
      '/',
      '/getting-started',
      ['/basic', '基础使用'],
      ['/alert', 'Alert'],
      ['/confirm', 'Confirm'],
      ['/prompt', 'Prompt'],
      ['/actions', 'Actions'],
      ['/dialog', 'Dialog']
    ]
  }
}