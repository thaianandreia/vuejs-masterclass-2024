<script setup lang="ts">
import { tasksWithProjectsQuery } from '@/utils/supaQueries'
import type { TasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/TableColumns/tasksColumns'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery
  if (error) throw error
  tasks.value = data
}

await getTasks()
</script>
<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
