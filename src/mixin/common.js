import dayjs from 'dayjs'
var common = {
  filters: {
    formartTimeDay(ns) {
      return dayjs(parseInt(ns)).format('YYYY-MM-DD  HH:mm:ss')
    }
  },
  methods: {
    success(message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'success'
      })
    },
    error(message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'error'
      })
    },
    warning(message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'warning'
      })
    }
  }
}

export default common
