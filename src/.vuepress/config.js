
module.exports = {
  title: 'Taller de sistemas operativos',
  description: 'Contenido digital de la asignatura Taller de sistemas operativos',



  themeConfig: {
    
    nav: [
      /*

      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }*/
    ],
    sidebar: [
       '/',
       '/tema1/', 
       '/tema2/',
       '/tema3/',
       '/tema4/',
        
          ]
        },
      

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
