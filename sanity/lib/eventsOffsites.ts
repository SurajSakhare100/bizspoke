import { client } from './client'
import { eventsOffsitesQueries } from './queries'

export interface EventsOffsitesImage {
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

export interface EventsOffsites {
  _id: string
  name: string
  slug: {
    current: string
  }
  images: EventsOffsitesImage[]
  description: string
  subDescription: string
  featured: boolean
  order: number
}

export interface EventsOffsitesForGrid {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: EventsOffsitesImage
  description: string
  subDescription: string
}

// Get all events and off-sites
export async function getAllEventsOffsites(): Promise<EventsOffsites[]> {
  return await client.fetch(eventsOffsitesQueries.all)
}

// Get a single event/off-site by slug
export async function getEventsOffsitesBySlug(slug: string): Promise<EventsOffsites | null> {
  return await client.fetch(eventsOffsitesQueries.bySlug, { slug })
}

// Get featured events and off-sites
export async function getFeaturedEventsOffsites(): Promise<EventsOffsites[]> {
  return await client.fetch(eventsOffsitesQueries.featured)
}

// Get events and off-sites for grid display
export async function getEventsOffsitesForGrid(): Promise<EventsOffsitesForGrid[]> {
  return await client.fetch(eventsOffsitesQueries.forGrid)
}
