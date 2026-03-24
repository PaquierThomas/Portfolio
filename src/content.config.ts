import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { projectSchema } from './entities/project/type'

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
    schema: projectSchema,
  }),
}