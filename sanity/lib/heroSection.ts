import { client } from './client'

export interface HeroImage {
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
  alt: string
  order?: number
}

export interface HeroSection {
  _id: string
  title: string
  desktopImages: HeroImage[]
  mobileImages: HeroImage[]
}

export async function getHeroSection(): Promise<HeroSection | null> {
  try {
    const heroSection = await client.fetch(`
      *[_type == "heroSection"][0] {
        _id,
        title,
        desktopImages[] | order(order asc) {
          image,
          alt,
          order
        },
        mobileImages[] | order(order asc) {
          image,
          alt,
          order
        }
      }
    `)
    return heroSection || null
  } catch (error) {
    console.error('Error fetching hero section:', error)
    return null
  }
}
