<template>
  <div>dingdanfdslk</div>
</template>

<script>
import {
  getOrderList
} from '../../api/order'

export default {
  name: 'Index',
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      try {
        const list = await getOrderList({
          pageNum: 1,
          pageSize: 10
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
