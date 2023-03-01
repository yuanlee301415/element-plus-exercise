<template>

  <el-tabs v-model="activeName">
    <el-tab-pane label="User" >User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" >Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {reactive, ref, watch} from "vue";
const activeName = ref('3')
watch(activeName, (val) => console.log('activeName:', activeName.value))

</script>
