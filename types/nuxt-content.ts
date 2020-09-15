export type NuxtContentPage = object & {
  body: object,
  title: string,
  description: string,
  dir: string,
  extension: string,
  path: string,
  slug: string,
  toc: object[],
  createdAt: Date,
  updatedAt: Date,
}