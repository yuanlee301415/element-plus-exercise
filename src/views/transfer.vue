<template>
  <el-transfer v-model="value" :data="data" :left-default-checked="[7, 8]" :right-default-checked="[3, 4]" @left-check-change="handleLeftChange" @right-check-change="handleRightChange"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([1, 2, 3, 4])

function handleLeftChange(currKeys, changedKeys) {
  console.log('handleLeftChange:', { currKeys, changedKeys })
}


function handleRightChange(currKeys, changedKeys) {
  console.log('handleRightChange:', { currKeys, changedKeys })
}
</script>