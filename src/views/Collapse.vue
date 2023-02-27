<template>
  <h1>Basic</h1>
  <el-collapse v-model="namesA" @change="change">
    <el-collapse-item title="Home" name="home">
      <h2>Home Item</h2>
    </el-collapse-item>

    <el-collapse-item title="News" name="news">
      <h2>News Item</h2>
    </el-collapse-item>

    <el-collapse-item title="About" name="about">
      <h2>About Item</h2>
    </el-collapse-item>
  </el-collapse>

  <h1>手风琴效果</h1>
  <el-collapse v-model="namesB" accordion @change="change">
    <el-collapse-item title="Home" name="home">
      <h2>Home Item</h2>
    </el-collapse-item>

    <el-collapse-item title="News" name="news">
      <h2>News Item</h2>
    </el-collapse-item>

    <el-collapse-item title="About" name="about">
      <h2>About Item</h2>
    </el-collapse-item>
    <el-collapse-item name="disabled" disabled>
      <template #title><a>Disabled title</a></template>
      <h2>Disabled Item</h2>
    </el-collapse-item>
  </el-collapse>


  <h1>自定义 Title</h1>
  <el-collapse v-model="namesC" @change="change">
    <el-collapse-item name="home">
      <template #title><a>Home title</a></template>
      <h2>Home Item</h2>
    </el-collapse-item>

    <el-collapse-item name="news">
      <template #title><a>News title</a></template>
      <h2>News Item</h2>
    </el-collapse-item>

    <el-collapse-item name="disabled" disabled>
      <template #title><a>Disabled title</a></template>
      <h2>Disabled Item</h2>
    </el-collapse-item>

    <el-collapse-item title="About" name="about">
      <template #title><a>About title</a></template>
      <h2>About Item</h2>
    </el-collapse-item>
  </el-collapse>

</template>

<script lang="ts" setup>

import {ref} from "vue";

const namesA = ref<string[]>([])
const namesB = ref<string[]>(['disabled'])
const namesC = ref<string[]>(['disabled'])
const change = (names: string | string[]) => console.log('change names:', names)
</script>
