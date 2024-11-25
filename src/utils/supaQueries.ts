import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

// Tasks
export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects (
    id,
    name,
    slug
  )
`)

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

// Projects
export const projectsQuery = supabase.from('projects').select('*')

export type Projects = QueryData<typeof projectsQuery>

// Project
export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
      *,
      tasks (
        id,
        name,
        status,
        due_date
      )`,
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>

// Task
export const taskQuery = (id: string) =>
  supabase
    .from('tasks')
    .select(
      `
    *,
    projects (
      id,
      name,
      slug
    )
  `,
    )
    .eq('id', id)
    .single()

export type Task = QueryData<ReturnType<typeof taskQuery>>
