<template>
  <h1>Default</h1>
  <el-button>Button</el-button>

  <hr>
  <h1>分组</h1>
  <el-button-group type="success" size="large">
    <el-button>Button</el-button>
    <el-button>Button</el-button>
  </el-button-group>
  <hr>
  <el-button-group type="success" size="large">
    <el-button type="warning">Button</el-button>
    <el-button size="small">Button</el-button>
  </el-button-group>
  <hr>
  <el-button-group type="success" size="large">
    <button>1</button>
    <el-button type="warning">Button</el-button>
    <input type="text">
    <el-button size="small">Button</el-button>
  </el-button-group>

  <hr>
  <h1>切换选择组件属性</h1>
  <select v-model="type">
    <option value="">--Change type--</option>
    <option value="primary">Primary</option>
    <option value="success">Success</option>
  </select>
  <el-button-group :type="type" size="large">
    <el-button>Button</el-button>
    <el-button>Button</el-button>
  </el-button-group>

  <hr>
  <select v-model="size">
    <option value="">--Change size--</option>
    <option value="small">Small</option>
    <option value="large">Large</option>
  </select>
  <el-button-group :size="size">
    <el-button>Button</el-button>
    <el-button>Button</el-button>
  </el-button-group>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const type = ref('')
const size = ref('')
</script>
