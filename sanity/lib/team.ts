import { client } from './client'

export interface TeamMember {
  _id: string
  name: string
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
  order?: number
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const teamMembers = await client.fetch(`
      *[_type == "team"] | order(order asc, name asc) {
        _id,
        name,
        image,
        order
      }
    `)
    return teamMembers || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}
