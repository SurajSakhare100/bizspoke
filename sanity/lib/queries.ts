import { groq } from 'next-sanity'

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
      subDescription,
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
      subDescription,
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
      subDescription,
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
