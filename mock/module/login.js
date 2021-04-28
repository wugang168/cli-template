// 列表
function login(req) {
  return {
    isSucceeded: true, // 请求是否成功
    errorCode: 0, // 错误码
    data: {}
  }
}

module.exports = {
  login
}
