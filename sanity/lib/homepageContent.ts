import { client } from './client'

export interface HomepageContent {
  _id: string
  sectionName: string
  title?: string
  subtitle?: string
  description?: string
  content?: any[]
  buttonText?: string
  buttonLink?: string
  images?: {
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
  }[]
  order?: number
}

export async function getHomepageContent(): Promise<HomepageContent[]> {
  try {
    const content = await client.fetch(`
      *[_type == "homepageContent"] | order(order asc, sectionName asc) {
        _id,
        sectionName,
        title,
        subtitle,
        description,
        content,
        buttonText,
        buttonLink,
        images,
        order
      }
    `)
    return content || []
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return []
  }
}

export async function getHomepageContentBySection(sectionName: string): Promise<HomepageContent | null> {
  try {
    const content = await client.fetch(`
      *[_type == "homepageContent" && sectionName == $sectionName][0] {
        _id,
        sectionName,
        title,
        subtitle,
        description,
        content,
        buttonText,
        buttonLink,
        images,
        order
      }
    `, { sectionName })
    return content || null
  } catch (error) {
    console.error('Error fetching homepage content section:', error)
    return null
  }
}
