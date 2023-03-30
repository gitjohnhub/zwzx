<script setup lang="ts">
import { ref } from 'vue';
import type { SizeType } from 'ant-design-vue/es/config-provider';
const size = ref<SizeType>('large')
const shipinxinban = "https://zwdt.sh.gov.cn/govPortals/bsfw/item/51dd6e47-4c9a-42dd-96aa-c5701887ef5f"
</script>

<template>
   <a-divider />
  <a :href='shipinxinban' target="_blank"><a-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    testView
  </a-button></a>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
