<template>
  <el-space>
    <el-card>
      <ol>
        <li v-for="n of [1,2,3]" :key="n">Item-{{n}}</li>
      </ol>
    </el-card>

    <el-card>
      <ol>
        <li v-for="n of [1,2,3]" :key="n">Item-{{n}}</li>
      </ol>
    </el-card>

    <el-card>
      <ol>
        <li v-for="n of [1,2,3]" :key="n">Item-{{n}}</li>
      </ol>
    </el-card>
  </el-space>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

</script>
