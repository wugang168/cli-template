var paginations = {
  data: function () {
    return {
      listQuery: {
        page: this.$route.query.page - 0 || 1,
        limit: this.$route.query.limit - 0 || 10
      },
      total: null
    }
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      this.routerRefresh()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.listQuery.page = 1
      this.routerRefresh()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.routerRefresh()
    },
    routerRefresh() {
      // 这里最好是过滤下为空 null undefined 的参数
      // let query = {};
      // Object.keys(this.listQuery).forEach(item => {
      //   query[item] = this.listQuery[item];
      // });
      this.$router.replace({
        path: this.$route.fullPath,
        query: this.listQuery
      })
    }
  }
}

export default paginations
