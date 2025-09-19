import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
            // Accept all image formats
            accept: 'image/*',
            // Additional formats support
            storeOriginalFilename: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'subDescription',
      title: 'Sub Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Destination',
      type: 'boolean',
      description: 'Mark this destination as featured to highlight it on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in listings',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Order (Low to High)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})