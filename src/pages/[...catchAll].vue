<script setup lang="ts">
usePageStore().pageData.title = ''

useErrorStore().setError({
  error: 'Page not found',
  customCode: 404,
})
</script>

<template>
  <div></div>
</template>
