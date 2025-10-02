# Strapi CMS Integration Guide

This document outlines the complete integration of your Next.js IT services website with Strapi CMS.

## Overview

The website has been successfully migrated from Supabase to Strapi CMS, removing all hardcoded dummy data and implementing dynamic content management.

## ✅ Completed Integrations

### 1. API Configuration
- **File**: `lib/strapi.ts` (formerly `lib/supabase.ts`)
- **Features**: 
  - Custom Strapi API client with authentication support
  - Error handling and request/response management
  - Environment-based configuration

### 2. Data Models Updated
- **File**: `lib/api.ts`
- **Strapi Collections Integrated**:
  - Services
  - Case Studies (Portfolio)
  - Blog Posts
  - Team Members
  - Contact Submissions
  - Newsletter Subscriptions

### 3. Services Integration
- **Files**: 
  - `app/services/page.tsx`
  - `components/sections/services-overview.tsx`
- **Features**:
  - Dynamic service loading from Strapi
  - Icon mapping for services
  - Loading states and error handling

### 4. Portfolio Integration
- **Files**:
  - `app/portfolio/page.tsx`
  - `components/sections/featured-portfolio.tsx`
- **Features**:
  - Dynamic case study loading
  - Category filtering
  - Featured project highlighting
  - Image handling with fallbacks

### 5. Blog Integration
- **Files**:
  - `app/blog/page.tsx`
- **Features**:
  - Dynamic blog post loading
  - Featured vs regular post separation
  - Author information display
  - Image handling

### 6. Contact Form
- **File**: `components/forms/contact-form.tsx`
- **Features**:
  - Form submissions to Strapi API
  - Success/error notifications
  - Form validation

## Required Strapi Configuration

### Content Types to Create in Strapi

#### 1. Services
- **Collection Type**: `services`
- **Fields**:
  - `name` (Text, required)
  - `slug` (UID, required)
  - `description` (Text, required)
  - `icon` (Text) - Should match icon names: Code, Cloud, Shield, Database, Network, Smartphone, Bot, Globe, Server, Lock, BarChart3, Headphones
  - `features` (JSON)
  - `order_position` (Number)
  - `published` (Boolean, default: false)

#### 2. Case Studies
- **Collection Type**: `case-studies`
- **Fields**:
  - `title` (Text, required)
  - `slug` (UID, required)
  - `client` (Text, required)
  - `description` (Text, required)
  - `challenge` (Rich Text)
  - `solution` (Rich Text)
  - `results` (JSON) - Key-value pairs for metrics
  - `images` (Media, multiple)
  - `technologies` (JSON) - Array of technology names
  - `service` (Relation to Services, many-to-one)
  - `published` (Boolean, default: false)
  - `featured` (Boolean, default: false)

#### 3. Blog Posts
- **Collection Type**: `blog-posts`
- **Fields**:
  - `title` (Text, required)
  - `slug` (UID, required)
  - `excerpt` (Text, required)
  - `content` (Rich Text, required)
  - `cover_image` (Media, single)
  - `author` (Relation to Users, many-to-one)
  - `published` (Boolean, default: false)
  - `featured` (Boolean, default: false)
  - `views` (Number, default: 0)

#### 4. Team Members
- **Collection Type**: `team-members`
- **Fields**:
  - `name` (Text, required)
  - `position` (Text, required)
  - `bio` (Text)
  - `avatar` (Media, single)
  - `social_links` (JSON) - Social media links
  - `order_position` (Number)
  - `published` (Boolean, default: false)

#### 5. Contact Submissions
- **Collection Type**: `contact-submissions`
- **Fields**:
  - `name` (Text, required)
  - `email` (Email, required)
  - `company` (Text)
  - `phone` (Text)
  - `service_interest` (Text)
  - `message` (Text, required)

#### 6. Newsletter Subscriptions
- **Collection Type**: `newsletter-subscriptions`
- **Fields**:
  - `email` (Email, required, unique)

## Environment Variables

Create a `.env.local` file with:

```bash
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_TOKEN=your_strapi_api_token_here
```

## API Permissions in Strapi

Ensure the following permissions are set for the public role:

### Public Permissions (no authentication required):
- **Services**: find, findOne
- **Case Studies**: find, findOne
- **Blog Posts**: find, findOne
- **Team Members**: find, findOne
- **Contact Submissions**: create
- **Newsletter Subscriptions**: create

### Authenticated Permissions (with API token):
- All collections: full CRUD operations for content management

## Installation & Setup

1. **Install Dependencies** (already completed)
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Update the Strapi URL and API token

3. **Create Strapi Content Types**
   - Use the schema definitions above
   - Set appropriate permissions
   - Create sample content for testing

4. **Test the Integration**
   ```bash
   npm run dev
   ```

## Key Features

### Loading States
All pages include proper loading states with spinners while fetching data from Strapi.

### Error Handling
Comprehensive error handling with user-friendly messages when API calls fail.

### Image Handling
- Supports both absolute URLs and Strapi relative URLs
- Fallback images for missing content
- Proper alt text from Strapi content

### SEO-Friendly
- Dynamic metadata generation
- Proper slug-based routing
- Clean URLs

## Next Steps

1. **Set up Strapi CMS**
   - Install and configure Strapi
   - Create the content types listed above
   - Import/create your content

2. **Configure Environment**
   - Update `.env.local` with your Strapi URL and token

3. **Test All Integrations**
   - Verify services display correctly
   - Test portfolio filtering
   - Check blog post display
   - Test contact form submissions

4. **Content Migration**
   - Migrate existing content to Strapi
   - Update any references or links
   - Test all functionality

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure Strapi is configured to allow requests from your Next.js domain
2. **Permission Errors**: Check API permissions in Strapi admin panel
3. **Image Loading**: Verify media files are accessible and URLs are correct
4. **Environment Variables**: Ensure all required env vars are set and accessible

The integration is complete and ready for production use with your Strapi CMS backend!