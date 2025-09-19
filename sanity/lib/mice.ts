import { client } from './client'
import { miceQueries } from './queries'

export interface MiceImage {
  asset: {
    _id: string
    url: string
    metadata: {
      dimensions: {
        width: number
        height: number
      }
    }
  }
  alt?: string
}

export interface Mice {
  _id: string
  name: string
  slug: {
    current: string
  }
  images: MiceImage[]
  description: string
  subDescription: string
  featured: boolean
  order: number
}

export interface MiceForGrid {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: MiceImage
  description: string
  subDescription: string
}

// Get all MICE events
export async function getAllMice(): Promise<Mice[]> {
  return await client.fetch(miceQueries.all)
}

// Get a single MICE event by slug
export async function getMiceBySlug(slug: string): Promise<Mice | null> {
  return await client.fetch(miceQueries.bySlug, { slug })
}

// Get featured MICE events
export async function getFeaturedMice(): Promise<Mice[]> {
  return await client.fetch(miceQueries.featured)
}

// Get MICE events for grid display
export async function getMiceForGrid(): Promise<MiceForGrid[]> {
  return await client.fetch(miceQueries.forGrid)
}
