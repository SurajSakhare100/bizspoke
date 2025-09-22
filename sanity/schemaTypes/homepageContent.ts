import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepageContent',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionName',
      title: 'Section Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'content',
      title: 'Rich Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string'
    }),
    defineField({
      name: 'images',
      title: 'Section Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this section should appear on homepage'
    })
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'title'
    }
  }
})
