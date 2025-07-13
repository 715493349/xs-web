/**
 * 路由别名，方便快速找到页面，同时可以用作路由跳转
 */
export enum RoutesAlias {
  Layout = '/index/index', // 布局容器
  Login = '/auth/login', // 登录
  Register = '/auth/register', // 注册
  ForgetPassword = '/auth/forget-password', // 忘记密码
  Exception403 = '/exception/403', // 403
  Exception404 = '/exception/404', // 404
  Exception500 = '/exception/500', // 500
  welcome = '/home/welcome', // 首页
  landEntering = '/business/landResource/entering', // 土地资源录入
  landRelease = '/business/landResource/release', // 土地资源发布
  industryEntering = '/business/industrySpaceResource/entering', // 产业资源录入
  industryRelease = '/business/industrySpaceResource/release', // 产业资源发布
  businessEntering = '/business/businessBuildingInput/entering', // 商业楼宇录入
  businessRelease = '/business/businessBuildingInput/release', // 商业楼宇录入

  IconList = '/widgets/icon-list', // 图标列表
  Cards = '/template/cards', // 卡片
  User = '/system/user', // 账户
  Role = '/system/role', // 角色
  UserCenter = '/system/user-center', // 用户中心
  Menu = '/system/menu', // 菜单
  ExamplesTables = '/examples/tables' // 高级表格示例
}
