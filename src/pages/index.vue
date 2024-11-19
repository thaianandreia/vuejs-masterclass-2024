<script setup lang="ts">
import { usePageStore } from '@/store/page'

usePageStore().pageData.title = 'HomePage'
</script>
<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>
