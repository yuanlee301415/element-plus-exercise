<template>
  <h2>Calendar - 日历</h2>
  <el-calendar v-model="date"/>
  date: {{ date }}
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const date = ref(new Date(2000, 1,10))

</script>
