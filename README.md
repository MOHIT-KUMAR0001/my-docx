# Documentation Platform

A professional, production-ready static documentation website built with React, Tailwind CSS, and designed for Netlify deployment. Transform your Markdown files into a beautiful, searchable documentation site automatically.

![Documentation Platform](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.3-646cff)
![License](https://img.shields.io/badge/license-ISC-green)

## ✨ Features

- 🎨 **Modern & Elegant Design** - Clean, professional aesthetic inspired by leading documentation platforms
- 🌓 **Dark Mode** - Full dark mode support with automatic system detection and manual toggle
- 📱 **Fully Responsive** - Seamless experience across all devices
- ⚡ **Lightning Fast** - Static site generation with optimized builds
- 📝 **Markdown-Powered** - Write content in simple Markdown format
- 🔍 **Easy Navigation** - Dynamic sidebar and table of contents
- 💻 **Syntax Highlighting** - Beautiful code highlighting with copy-to-clipboard
- 🚀 **Auto-Deploy** - Git-based deployment with Netlify
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **SEO-Friendly** - Optimized for search engines

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MOHIT-KUMAR0001/my-docx.git
cd my-docx
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📁 Project Structure

```
my-docx/
├── content/                 # Markdown documentation files
│   ├── getting-started.md
│   ├── guide/
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   └── usage.md
│   ├── components/
│   │   ├── button.md
│   │   └── card.md
│   └── api-reference.md
├── src/
│   ├── components/          # React components
│   │   ├── CodeBlock.jsx
│   │   ├── MarkdownRenderer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TableOfContents.jsx
│   │   └── ThemeToggle.jsx
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/               # Page components
│   │   └── DocumentPage.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useTheme.js
│   │   └── useScrollSpy.js
│   ├── utils/               # Utility functions
│   │   ├── documentUtils.js
│   │   └── documentStructure.js
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── netlify.toml             # Netlify deployment config
└── package.json             # Project dependencies
```

## 📝 Adding Documentation

### Creating a New Document

1. Create a new `.md` file in the `content/` directory:

```markdown
---
title: Your Page Title
description: A brief description
---

# Your Content Here

Write your documentation in Markdown...
```

2. Update `src/utils/documentStructure.js` to include it in navigation:

```javascript
export const documentStructure = [
  {
    title: 'Your Section',
    children: [
      {
        title: 'Your Page',
        path: 'your-page.md'
      }
    ]
  }
]
```

3. Save and the page will automatically appear in the sidebar!

### Markdown Features

- **Headings**: `#`, `##`, `###`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Code**: `` `code` ``
- **Code Blocks**: ` ```language` ... ` ``` `
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Tables**: `| col | col |`
- **Lists**: `-` or `1.`
- **Blockquotes**: `>`

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9',  // Your brand color
      },
    },
  },
}
```

### Site Information

Update site name and metadata in:
- `index.html` - Page title and meta tags
- `src/components/Navbar.jsx` - Navigation bar title

### Syntax Highlighting Theme

Change the code highlighting theme in `src/main.jsx`:

```javascript
import 'highlight.js/styles/github-dark.css'  // Change theme here
```

Available themes: `github-dark`, `monokai`, `atom-one-dark`, etc.

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment to Netlify

### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings are automatically detected from `netlify.toml`
6. Click "Deploy site"

Your site will automatically redeploy when you push changes to GitHub!

### Option 2: Deploy via CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Custom Domain

In Netlify dashboard:
1. Go to "Domain settings"
2. Add your custom domain
3. Follow DNS configuration instructions

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **react-markdown** - Markdown parsing
- **rehype-highlight** - Syntax highlighting
- **remark-gfm** - GitHub Flavored Markdown

## 📚 Documentation

Visit the live documentation site to see all features in action:
- [Getting Started](content/getting-started.md)
- [Installation Guide](content/guide/installation.md)
- [Configuration](content/guide/configuration.md)
- [Usage Guide](content/guide/usage.md)
- [API Reference](content/api-reference.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License

## 🙏 Acknowledgments

Built with modern web technologies and best practices for documentation sites.

---

Made with ❤️ using React and Tailwind CSS
