import { client } from './client'

export interface OurExpertise {
  _id: string
  title: string
  description: string
  image: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  slug: {
    current: string
  }
  order?: number
}

export async function getOurExpertiseBySlug(slug: string): Promise<OurExpertise | null> {
  try {
    const ourExpertise = await client.fetch(`
      *[_type == "ourExpertise" && slug.current == $slug][0] {
        _id,
        title,
        description,
        image,
        slug,
        order
      }
    `, { slug })
    return ourExpertise || null
  } catch (error) {
    console.error('Error fetching our expertise:', error)
    return null
  }
}

export async function getAllOurExpertise(): Promise<OurExpertise[]> {
  try {
    const ourExpertise = await client.fetch(`
      *[_type == "ourExpertise"] | order(order asc, title asc) {
        _id,
        title,
        description,
        image,
        slug,
        order
      }
    `)
    return ourExpertise || []
  } catch (error) {
    console.error('Error fetching our expertise:', error)
    return []
  }
}
