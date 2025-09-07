import { client } from './client'
import { destinationQueries } from './queries'

export interface DestinationImage {
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

export interface Destination {
  _id: string
  name: string
  slug: {
    current: string
  }
  images: DestinationImage[]
  description: string
  subDescription: string
  featured: boolean
  order: number
}

export interface DestinationForGrid {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: DestinationImage
}

// Get all destinations
export async function getAllDestinations(): Promise<Destination[]> {
  return await client.fetch(destinationQueries.all)
}

// Get a single destination by slug
export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  return await client.fetch(destinationQueries.bySlug, { slug })
}

// Get featured destinations
export async function getFeaturedDestinations(): Promise<Destination[]> {
  return await client.fetch(destinationQueries.featured)
}

// Get destinations for grid display
export async function getDestinationsForGrid(): Promise<DestinationForGrid[]> {
  return await client.fetch(destinationQueries.forGrid)
}
