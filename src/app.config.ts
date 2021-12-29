export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/test/index',
  ],
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/index/index",
        text: "  "
      },
      {
        pagePath: "pages/user/index",
        text: "  "
      },
    ],
    color: '#333',
    borderStyle: 'black',
    selectedColor: '#333',
    backgroundColor: '#fff',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
