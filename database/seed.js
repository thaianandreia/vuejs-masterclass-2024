import { fakerPT_BR as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SERVICE_ROLE_KEY,
)

const seedProjects = async numEntries => {
  const projects = []
  for (let index = 0; index < numEntries; index++) {
    const name = faker.lorem.words(3)
    projects.push({
      name: name,
      slug: faker.helpers.slugify(name),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }
  const { data, error, status } = await supabase
    .from('projects')
    .insert(projects)
  console.log(data, status, error)
}

await seedProjects(10)
