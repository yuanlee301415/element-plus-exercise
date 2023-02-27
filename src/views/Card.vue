<template>
  <h1>Basic</h1>
  <el-card>
    <template #header>
      CardName
    </template>
  </el-card>

  <el-card header="CardName2"></el-card>

  <el-card header="Prop: CardName 3">
    <template #header>
      Slot: CardName 3
    </template>
  </el-card>
</template>

<script lang="ts" setup>

</script>
