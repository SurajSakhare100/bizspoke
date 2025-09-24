import { groq } from 'next-sanity'

// Common query structure for all experience types
const baseExperienceQuery = `
  _id,
  name,
  slug,
  images[] {
    asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    },
    alt
  },
  description,
  featured,
  order
`

const baseExperienceGridQuery = `
  _id,
  name,
  slug,
  "image": images[0] {
    asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    },
    alt
  },
  description
`

export const destinationQueries = {
  // Get all destinations
  all: groq`
    *[_type == "destination"] | order(order asc, name asc) {
      _id,
      name,
      slug,
      images[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      description,
      featured,
      order
    }
  `,

  // Get a single destination by slug
  bySlug: groq`
    *[_type == "destination" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      images[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      description,
      featured,
      order
    }
  `,

  // Get featured destinations
  featured: groq`
    *[_type == "destination" && featured == true] | order(order asc, name asc) {
      _id,
      name,
      slug,
      images[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      description,
      featured,
      order
    }
  `,

  // Get destinations for grid (limited images)
  forGrid: groq`
    *[_type == "destination"] | order(order asc, name asc) {
      _id,
      name,
      slug,
      "image": images[0] {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    }
  `
}

// Luxury Retreats queries
export const luxuryRetreatsQueries = {
  all: groq`*[_type == "luxuryRetreats"] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  bySlug: groq`*[_type == "luxuryRetreats" && slug.current == $slug][0] { ${baseExperienceQuery} }`,
  featured: groq`*[_type == "luxuryRetreats" && featured == true] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  forGrid: groq`*[_type == "luxuryRetreats"] | order(order asc, name asc) { ${baseExperienceGridQuery} }`
}

// Events and Off-sites queries
export const eventsOffsitesQueries = {
  all: groq`*[_type == "eventsOffsites"] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  bySlug: groq`*[_type == "eventsOffsites" && slug.current == $slug][0] { ${baseExperienceQuery} }`,
  featured: groq`*[_type == "eventsOffsites" && featured == true] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  forGrid: groq`*[_type == "eventsOffsites"] | order(order asc, name asc) { ${baseExperienceGridQuery} }`
}

// MICE queries
export const miceQueries = {
  all: groq`*[_type == "mice"] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  bySlug: groq`*[_type == "mice" && slug.current == $slug][0] { ${baseExperienceQuery} }`,
  featured: groq`*[_type == "mice" && featured == true] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  forGrid: groq`*[_type == "mice"] | order(order asc, name asc) { ${baseExperienceGridQuery} }`
}

// Celebrations queries
export const celebrationsQueries = {
  all: groq`*[_type == "celebrations"] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  bySlug: groq`*[_type == "celebrations" && slug.current == $slug][0] { ${baseExperienceQuery} }`,
  featured: groq`*[_type == "celebrations" && featured == true] | order(order asc, name asc) { ${baseExperienceQuery} }`,
  forGrid: groq`*[_type == "celebrations"] | order(order asc, name asc) { ${baseExperienceGridQuery} }`
}
