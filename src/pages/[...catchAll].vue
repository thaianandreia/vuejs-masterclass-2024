<script setup lang="ts">
import AppErrorPage from '@/components/appError/AppErrorPage.vue'
usePageStore().pageData.title = ''
</script>

<template>
  <AppErrorPage />
</template>
