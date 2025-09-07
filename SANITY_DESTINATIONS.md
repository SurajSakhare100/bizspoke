# Sanity Destinations Schema

This document explains how to use the Sanity schema for managing destinations in your Bizspoke travel website.

## Schema Structure

The destination schema includes the following fields:

### Required Fields
- **name** (string): The destination name (e.g., "Maldives", "Goa")
- **slug** (slug): URL-friendly version of the name (auto-generated from name)
- **images** (array): Array of images with alt text
- **description** (text): Main description text
- **subDescription** (text): Secondary description text

### Optional Fields
- **featured** (boolean): Mark as featured destination (default: false)
- **order** (number): Display order in listings (default: 0, lower numbers first)

## How to Use

### 1. Access Sanity Studio
Visit `/studio` in your browser to access the Sanity Studio where you can manage destinations.

### 2. Create Destinations
1. Click "Create" → "Destination"
2. Fill in the required fields:
   - **Name**: e.g., "Maldives"
   - **Slug**: Will auto-generate from name
   - **Images**: Upload 2+ images, add alt text for accessibility
   - **Description**: Main description text
   - **Sub Description**: Additional description text
3. Optionally set:
   - **Featured**: Check if this should be highlighted
   - **Order**: Set display order (0 = first)
4. Click "Publish"

### 3. Using in Components

#### Fetch All Destinations
```typescript
import { getAllDestinations } from '@/sanity/lib/destinations'

const destinations = await getAllDestinations()
```

#### Fetch Single Destination
```typescript
import { getDestinationBySlug } from '@/sanity/lib/destinations'

const destination = await getDestinationBySlug('maldives')
```

#### Fetch for Grid Display
```typescript
import { getDestinationsForGrid } from '@/sanity/lib/destinations'

const destinations = await getDestinationsForGrid()
```

### 4. Image Handling

Images are automatically optimized by Sanity. The schema includes:
- **Asset URL**: Direct URL to the optimized image
- **Alt Text**: For accessibility and SEO
- **Metadata**: Dimensions and other image data

### 5. Example Data Structure

```typescript
{
  _id: "destination-123",
  name: "Maldives",
  slug: { current: "maldives" },
  images: [
    {
      asset: {
        _id: "image-123",
        url: "https://cdn.sanity.io/images/...",
        metadata: { dimensions: { width: 1920, height: 1080 } }
      },
      alt: "Beautiful Maldives beach with crystal clear water"
    }
  ],
  description: "At Bizspoke, we deliver 360° event solutions...",
  subDescription: "Our clients trust us with end-to-end management...",
  featured: true,
  order: 0
}
```

## Migration from Hardcoded Data

To migrate from your current hardcoded destinations:

1. Create destinations in Sanity Studio with the same data
2. Update your components to use the Sanity functions
3. Remove the hardcoded data arrays
4. Test the new dynamic content

## Benefits

- **Content Management**: Non-technical users can update destinations
- **Image Optimization**: Automatic image optimization and responsive images
- **SEO**: Better SEO with proper alt text and structured data
- **Scalability**: Easy to add new destinations without code changes
- **Consistency**: Centralized content management
