import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamSettings',
  title: 'Team Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Team Settings'
    }),
    defineField({
      name: 'groupPhoto',
      title: 'Team Group Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main group photo of the entire team'
    }),
    defineField({
      name: 'groupPhotoAlt',
      title: 'Group Photo Alt Text',
      type: 'string',
      description: 'Alt text for the group photo'
    }),
    defineField({
      name: 'teamDescription',
      title: 'Team Description',
      type: 'text',
      description: 'Description that appears above the team members',
      validation: (Rule) => Rule.max(500)
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'groupPhoto'
    }
  }
})
