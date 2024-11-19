<script setup lang="ts">
import { projectsQuery } from '@/utils/supaQueries'
import type { Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/TableColumns/projectsColumns'

usePageStore().pageData.title = 'My Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error } = await projectsQuery
  if (error) throw error
  projects.value = data
}

await getProjects()
</script>
<template>
  <DataTable v-if="projects" :columns="columns" :data="projects"></DataTable>
</template>
