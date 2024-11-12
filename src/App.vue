<script setup lang="ts">
import AuthLayout from '@/components/layout/main/AuthLayout.vue'
</script>

<template>
  <AuthLayout class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
    <RouterView />
  </AuthLayout>
</template>
