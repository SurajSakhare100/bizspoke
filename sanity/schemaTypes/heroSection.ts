import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Hero Section'
    }),
    defineField({
      name: 'desktopImages',
      title: 'Desktop Hero Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required()
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number'
            }
          ]
        }
      ],
      validation: (Rule) => Rule.min(1).max(10)
    }),
    defineField({
      name: 'mobileImages',
      title: 'Mobile Hero Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required()
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number'
            }
          ]
        }
      ],
      validation: (Rule) => Rule.min(1).max(10)
    })
  ],
  preview: {
    select: {
      title: 'title',
      desktopImages: 'desktopImages',
      mobileImages: 'mobileImages'
    },
    prepare(selection) {
      const { title, desktopImages, mobileImages } = selection
      return {
        title: title,
        subtitle: `Desktop: ${desktopImages?.length || 0} images, Mobile: ${mobileImages?.length || 0} images`
      }
    }
  }
})
