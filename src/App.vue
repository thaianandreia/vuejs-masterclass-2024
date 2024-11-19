<script setup lang="ts">
import { Component } from 'lucide-vue-next'
</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>
        <template #fallback>
          <span>Loading ..</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
