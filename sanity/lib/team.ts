import { client } from './client'

export interface TeamMember {
  _id: string
  name: string
  position: string
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

export interface TeamSettings {
  _id: string
  title: string
  groupPhoto?: {
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
  groupPhotoAlt?: string
  teamDescription?: string
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const teamMembers = await client.fetch(`
      *[_type == "team"] | order(order asc, name asc) {
        _id,
        name,
        position,
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

export async function getTeamSettings(): Promise<TeamSettings | null> {
  try {
    const teamSettings = await client.fetch(`
      *[_type == "teamSettings"][0] {
        _id,
        title,
        groupPhoto,
        groupPhotoAlt,
        teamDescription
      }
    `)
    return teamSettings || null
  } catch (error) {
    console.error('Error fetching team settings:', error)
    return null
  }
}
