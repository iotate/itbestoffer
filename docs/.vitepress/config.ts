import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '计算机专业职业发展指北',
  description: '在不确定的时代，做确定的自己',
  lang: 'zh-CN',
  
  // GitHub Pages 配置 - 将 your-username 替换为你的 GitHub 用户名
  base: '/itbestoffer/',
  
  // 隐藏外观切换
  appearance: false,
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '计算机专业职业发展指北',
    
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '主流行业', 
        items: [
          { text: '互联网大厂', link: '/02.互联网大厂解析' },
          { text: '人工智能与大模型', link: '/03.人工智能与大模型行业解析' },
          { text: '金融科技', link: '/04.金融科技行业解析' },
          { text: '新能源汽车与智能驾驶', link: '/05.新能源汽车与智能驾驶行业解析' },
          { text: '游戏与文娱', link: '/06.游戏与文娱产业解析' },
          { text: '教育科技', link: '/07.教育科技与在线教育' },
          { text: '制造业与智能硬件', link: '/08.制造业与智能硬件行业解析' },
          { text: '通信与终端', link: '/09.通信与终端行业解析' },
          { text: '半导体与芯片设计', link: '/10.半导体与芯片设计行业解析' },
          { text: '信息安全与合规', link: '/11.信息安全与合规行业' },
        ]
      },
      { 
        text: '小众行业', 
        items: [
          { text: '区块链与Web3', link: '/12.区块链与Web3' },
          { text: '未来科技融合', link: '/12.未来科技与垂直行业的融合机遇' },
          { text: '传统IT与软件公司', link: '/13.传统IT与软件公司解析' },
          { text: '金融行业IT', link: '/14.金融行业的IT机会解析' },
          { text: '国企与事业单位', link: '/15.国企与事业单位解析' },
          { text: '外企与跨国公司', link: '/16.外企与跨国科技公司解析' },
          { text: '创业公司与独角兽', link: '/17.创业公司与独角兽企业解析' },
          { text: '非营利组织与开源社区', link: '/18.非营利组织与开源社区' },
          { text: '自由职业与远程工作', link: '/19.自由职业与远程工作解析' },
        ]
      },
      {
        text: '职业规划',
        items: [
          { text: '职业规划底层逻辑', link: '/20.职业规划的底层逻辑' },
          { text: '个人成就系统工程', link: '/21.个人成就的系统工程' },
          { text: '典型IT岗位与趋势', link: '/22.典型IT岗位与发展趋势' },
          { text: '技术变革下的职业图谱', link: '/23.技术变革下的职业图谱重构' },
          { text: '从校园到职场', link: '/24.从校园到职场' },
        ]
      },
      { text: '附录', link: '/25.附录和后记' },
    ],
    
    sidebar: {
      '/': [
        {
          text: '开始阅读',
          items: [
            { text: '前言', link: '/00.前言' },
            { text: '计算机专业就业现状总览', link: '/01.计算机专业就业现状总览' },
          ]
        },
        {
          text: '主流行业解析',
          collapsed: false,
          items: [
            { text: '互联网大厂解析', link: '/02.互联网大厂解析' },
            { text: '人工智能与大模型行业解析', link: '/03.人工智能与大模型行业解析' },
            { text: '金融科技行业解析', link: '/04.金融科技行业解析' },
            { text: '新能源汽车与智能驾驶', link: '/05.新能源汽车与智能驾驶行业解析' },
            { text: '游戏与文娱产业解析', link: '/06.游戏与文娱产业解析' },
            { text: '教育科技与在线教育', link: '/07.教育科技与在线教育' },
            { text: '制造业与智能硬件', link: '/08.制造业与智能硬件行业解析' },
            { text: '通信与终端行业解析', link: '/09.通信与终端行业解析' },
            { text: '半导体与芯片设计', link: '/10.半导体与芯片设计行业解析' },
            { text: '信息安全与合规', link: '/11.信息安全与合规行业' },
          ]
        },
        {
          text: '小众行业解析',
          collapsed: false,
          items: [
            { text: '区块链与Web3', link: '/12.区块链与Web3' },
            { text: '未来科技与垂直行业融合', link: '/12.未来科技与垂直行业的融合机遇' },
            { text: '传统IT与软件公司', link: '/13.传统IT与软件公司解析' },
            { text: '金融行业的IT机会', link: '/14.金融行业的IT机会解析' },
            { text: '国企与事业单位', link: '/15.国企与事业单位解析' },
            { text: '外企与跨国科技公司', link: '/16.外企与跨国科技公司解析' },
            { text: '创业公司与独角兽', link: '/17.创业公司与独角兽企业解析' },
            { text: '非营利组织与开源社区', link: '/18.非营利组织与开源社区' },
            { text: '自由职业与远程工作', link: '/19.自由职业与远程工作解析' },
          ]
        },
        {
          text: '职业规划',
          collapsed: false,
          items: [
            { text: '职业规划的底层逻辑', link: '/20.职业规划的底层逻辑' },
            { text: '个人成就的系统工程', link: '/21.个人成就的系统工程' },
            { text: '典型IT岗位与发展趋势', link: '/22.典型IT岗位与发展趋势' },
            { text: '技术变革下的职业图谱重构', link: '/23.技术变革下的职业图谱重构' },
            { text: '从校园到职场', link: '/24.从校园到职场' },
          ]
        },
        {
          text: '附录',
          items: [
            { text: '附录和后记', link: '/25.附录和后记' },
          ]
        }
      ]
    },
    
    outline: {
      level: [2, 3],
      label: '章节导航'
    },
    
    footer: {
      message: '计算机专业职业发展指北',
      copyright: 'Copyright © 2025 舟游AI国'
    },
    
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    }
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#003366' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ]
})
