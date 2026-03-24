// src/entities/project/type.ts
import { z } from 'zod';

export const section_schema = z.object({
  title: z.string(),
  shortDescription: z.string(),
});

export const projectSchema = z.object({
  title: z.string(),
  title2: z.string(),
  date_parution: z.date(),
  imageCouverture: z.string(),
  client: z.string(),
  roles: z.array(z.string()),
  annee: z.object({
    debut: z.string(),
    fin: z.string(),
  }),
  subject: z.string(),
  summary: z.string(),

  procons: z
    .array(
      z.object({
        title: z.string(),
        image: z.string().optional(),
        list: z.array(z.string()).optional(),
        paragraph: z.string().optional(),
      })
    )
    .optional(),
});

export type Project = z.infer<typeof projectSchema>;
