<template>
  <el-avatar @error="() => true">User</el-avatar>
  <el-avatar @error="() => true" src="/logo.svg2">User</el-avatar>
  <el-avatar @error="() => true" src="/logo.svg3"><img src="/logo.svg" alt=""></el-avatar>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

</script>
