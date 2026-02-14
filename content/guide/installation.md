---
title: Installation Guide
description: Learn how to install and set up the documentation platform
---

# Installation Guide

This guide will walk you through the process of installing and setting up the documentation platform on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## Installation Steps

### 1. Clone the Repository

First, clone the repository to your local machine:

\`\`\`bash
git clone https://github.com/your-username/my-docx.git
cd my-docx
\`\`\`

### 2. Install Dependencies

Install all required dependencies using npm:

\`\`\`bash
npm install
\`\`\`

Or if you prefer yarn:

\`\`\`bash
yarn install
\`\`\`

### 3. Start Development Server

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

The site will be available at \`http://localhost:5173\`.

## Project Structure

After installation, your project structure will look like this:

\`\`\`
my-docx/
├── content/              # Markdown documentation files
│   ├── getting-started.md
│   ├── guide/
│   └── components/
├── src/
│   ├── components/       # React components
│   ├── layouts/          # Layout components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
\`\`\`

## Environment Setup

### Development Mode

For development with hot module replacement:

\`\`\`bash
npm run dev
\`\`\`

### Production Build

To create a production-optimized build:

\`\`\`bash
npm run build
\`\`\`

The built files will be in the \`dist\` directory.

### Preview Production Build

To preview the production build locally:

\`\`\`bash
npm run preview
\`\`\`

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the console output for the actual port number.

### Module Not Found Errors

If you encounter module not found errors, try:

1. Delete \`node_modules\` and \`package-lock.json\`
2. Run \`npm install\` again
3. Restart the development server

### Build Errors

If you encounter build errors:

1. Ensure all dependencies are installed
2. Check Node.js version (should be 18+)
3. Clear the build cache: \`rm -rf dist\`

## Next Steps

Now that you have the platform installed, check out:

- [Configuration Guide](configuration.md) - Customize your setup
- [Usage Guide](usage.md) - Learn how to add content
- [Deployment](../api-reference.md) - Deploy to production
