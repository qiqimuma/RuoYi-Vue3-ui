export default {
  /**
   * 网页标题
   */
  title: import.meta.env.VITE_APP_TITLE,
  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  sideTheme: 'theme-dark',
  /**
   * 是否系统布局配置
   */
  showSettings: false,

  /**
   * 是否显示顶部导航
   */
  topNav: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

  /**
   * 是否显示动态标题
   */
  dynamicTitle: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',
  /**
   * 开启cas
   */
  casEnable: true,
  
  /**
   * 单点登录url
   */
  casLoginUrl: 'http://10.138.151.141:8080/login?service=http://localhost:8080',
  // casLoginUrl: 'http://10.138.151.203:8080/cas/login?service=http://localhost:8080',
  // casLoginUrl: 'http://192.168.202.129:8080/cas/login?service=http://localhost:8080',
  
  /**
   * 单点登出url
   */
  casLogoutUrl: 'http://10.138.151.141:8080/logout?service=http://localhost:8080'
  // casLogoutUrl: 'http://10.138.151.203:8080/cas/logout?service=http://localhost:8080'
  // casLogoutUrl: 'http://192.168.202.129:8080/cas/logout?service=http://localhost:8080'
}
