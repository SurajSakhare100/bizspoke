'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  // Add media handling configuration
  media: {
    // Enable image handling
    images: {
      // Configure image upload options - allow all image types
      accept: 'image/*',
      maximumUploadSize: 30000000, // 30MB limit
    },
  },
  // Additional configuration for file uploads
  file: {
    // Allow various file types including images
    accept: 'image/*, .webp, .avif, .heic, .heif, .bmp, .tiff, .tif, .svg, .ico',
  },
})
