<template>
  <h2>prefix / suffix</h2>
  <el-statistic :value="25600" @change="change">
    <template #title><b>商品价格</b></template>
    <template #prefix>￥</template>
    <template #suffix>元</template>
  </el-statistic>

  <el-countdown
    :value="new Date().getTime() + 1000 * 60"
    @change="change"
  >

  </el-countdown>
</template>

<script lang="ts" setup>
function change(val: number) {
  console.log('change>val:', val)
}

</script>
