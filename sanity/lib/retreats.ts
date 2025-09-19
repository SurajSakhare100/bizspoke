import { client } from './client'
import { luxuryRetreatsQueries } from './queries'

export interface RetreatsImage {
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

  export interface Retreats {
  _id: string
  name: string
  slug: {
    current: string
  }
  images: RetreatsImage[]
  description: string
  subDescription: string
  featured: boolean
  order: number
}

export interface RetreatsForGrid {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: RetreatsImage
}

// Get all luxury retreats
export async function getAllRetreats(): Promise<Retreats[]> {
  return await client.fetch(luxuryRetreatsQueries.all)
}

// Get a single luxury retreat by slug
export async function getRetreatsBySlug(slug: string): Promise<Retreats | null> {
  return await client.fetch(luxuryRetreatsQueries.bySlug, { slug })
}

// Get featured luxury retreats
export async function getFeaturedRetreats(): Promise<Retreats[]> {
  return await client.fetch(luxuryRetreatsQueries.featured)
}

// Get luxury retreats for grid display
export async function getRetreatsForGrid(): Promise<RetreatsForGrid[]> {
  return await client.fetch(luxuryRetreatsQueries.forGrid)
}
