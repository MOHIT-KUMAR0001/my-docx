---
title: Configuration
description: Learn how to configure and customize your documentation site
---

# Configuration

This guide covers all the configuration options available for customizing your documentation platform.

## Project Configuration

### Vite Configuration

The \`vite.config.js\` file contains the main build configuration:

\`\`\`javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@content': path.resolve(__dirname, './content'),
    },
  },
})
\`\`\`

### Tailwind Configuration

Customize your theme in \`tailwind.config.js\`:

\`\`\`javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom color palette
        },
      },
    },
  },
}
\`\`\`

## Document Structure

### Adding New Documents

To add a new document:

1. Create a new \`.md\` file in the \`content\` directory
2. Add frontmatter (optional):

\`\`\`markdown
---
title: Your Page Title
description: A brief description
---

# Your Content Here
\`\`\`

3. Update \`src/utils/documentStructure.js\` to include it in navigation

### Document Structure Configuration

Edit \`src/utils/documentStructure.js\` to organize your sidebar:

\`\`\`javascript
export const documentStructure = [
  {
    title: 'Getting Started',
    path: 'getting-started.md',
  },
  {
    title: 'Guide',
    children: [
      {
        title: 'Installation',
        path: 'guide/installation.md'
      },
      // Add more items
    ]
  },
]
\`\`\`

## Theme Customization

### Colors

The platform uses a primary color scheme. To change it, modify the primary colors in \`tailwind.config.js\`:

\`\`\`javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    900: '#0c4a6e',
  },
}
\`\`\`

### Dark Mode

Dark mode is automatically detected based on system preferences. Users can toggle manually using the theme switcher in the navbar.

## Deployment Configuration

### Netlify Setup

The \`netlify.toml\` file configures deployment:

\`\`\`toml
[build]
  command = "npm run build"
  publish = "dist"
  
[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

### Environment Variables

You can add environment variables in Netlify dashboard or create a \`.env\` file:

\`\`\`
VITE_SITE_NAME=My Documentation
VITE_GA_ID=UA-XXXXXXXXX-X
\`\`\`

Access them in your code:

\`\`\`javascript
const siteName = import.meta.env.VITE_SITE_NAME
\`\`\`

## Advanced Options

### Custom Components

You can create custom markdown components by extending the MarkdownRenderer:

\`\`\`jsx
<ReactMarkdown
  components={{
    // Custom component
    callout: ({ children }) => (
      <div className="callout">{children}</div>
    ),
  }}
>
  {content}
</ReactMarkdown>
\`\`\`

### Syntax Highlighting

The platform uses highlight.js for code syntax highlighting. To change the theme, modify the import in \`src/main.jsx\`:

\`\`\`javascript
import 'highlight.js/styles/github-dark.css'
\`\`\`

## Next Steps

- [Usage Guide](usage.md) - Learn how to write documentation
- [API Reference](../api-reference.md) - Explore the API
