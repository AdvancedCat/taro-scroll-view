export default defineAppConfig({
  pages: [
    'pages/address/index',
    'pages/home/index',
    'pages/sticky/index',
    'pages/aligned/index',
    'pages/masonry/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: 'requiredComponents'
})
