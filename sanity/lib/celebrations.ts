import { client } from './client'
import { celebrationsQueries } from './queries'

export interface CelebrationsImage {
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

export interface Celebrations {
  _id: string
  name: string
  slug: {
    current: string
  }
  images: CelebrationsImage[]
  description: string
  subDescription: string
  featured: boolean
  order: number
}

export interface CelebrationsForGrid {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: CelebrationsImage
  description: string
  subDescription: string
}

// Get all celebrations
export async function getAllCelebrations(): Promise<Celebrations[]> {
  return await client.fetch(celebrationsQueries.all)
}

// Get a single celebration by slug
export async function getCelebrationsBySlug(slug: string): Promise<Celebrations | null> {
  return await client.fetch(celebrationsQueries.bySlug, { slug })
}

// Get featured celebrations
export async function getFeaturedCelebrations(): Promise<Celebrations[]> {
  return await client.fetch(celebrationsQueries.featured)
}

// Get celebrations for grid display
export async function getCelebrationsForGrid(): Promise<CelebrationsForGrid[]> {
  return await client.fetch(celebrationsQueries.forGrid)
}
