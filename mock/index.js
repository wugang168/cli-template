const bodyParser = require('body-parser')

/**
 * name   接口描述
 * api    请求路径
 * module 模拟导出来的数据对象
 * method 要执行的方法,执行方法返回响应数据
 * */
// 定义请求数据结构
const mock_module = [
  {
    name: '登录接口',
    api: '/api/login',
    module: require('./module/login'),
    method: 'login',
    type: 'post'
  }
]

//返回一个函数
module.exports = function (app) {
  // 解析参数方式
  app.use(bodyParser.json())
  mock_module.forEach((item) => {
    if (item.type === 'get') {
      app.get(item.api, (req, res) => {
        res.json(item.module[item.method](req))
      })
    } else if (item.type === 'post') {
      app.post(item.api, (req, res) => {
        res.json(item.module[item.method](req))
      })
    }
  })
}
