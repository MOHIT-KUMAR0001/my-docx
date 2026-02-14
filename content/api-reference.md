---
title: API Reference
description: Complete API reference for the documentation platform
---

# API Reference

This page provides a complete API reference for working with the documentation platform.

## Document Structure API

### documentStructure

The main configuration object for organizing your documentation.

\`\`\`javascript
export const documentStructure = [
  {
    title: string,           // Display title in sidebar
    path?: string,           // Optional: Path to markdown file
    children?: Array<{       // Optional: Nested items
      title: string,
      path: string
    }>
  }
]
\`\`\`

**Example:**

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
      }
    ]
  }
]
\`\`\`

## Utility Functions

### loadDocument(path)

Dynamically loads a markdown document.

**Parameters:**
- \`path\` (string): Relative path to markdown file from content directory

**Returns:** 
- Promise<string>: Raw markdown content

**Example:**

\`\`\`javascript
const content = await loadDocument('getting-started.md');
\`\`\`

### parseMarkdownMeta(content)

Extracts frontmatter metadata and content from markdown.

**Parameters:**
- \`content\` (string): Raw markdown with optional frontmatter

**Returns:**
- Object:
  - \`meta\` (object): Parsed frontmatter key-value pairs
  - \`content\` (string): Markdown content without frontmatter

**Example:**

\`\`\`javascript
const { meta, content } = parseMarkdownMeta(rawMarkdown);
console.log(meta.title); // "Page Title"
\`\`\`

### extractHeadings(content)

Extracts H2 and H3 headings from markdown content.

**Parameters:**
- \`content\` (string): Markdown content

**Returns:**
- Array<{ level: number, text: string, id: string }>

**Example:**

\`\`\`javascript
const headings = extractHeadings(content);
// [
//   { level: 2, text: 'Introduction', id: 'introduction' },
//   { level: 3, text: 'Getting Started', id: 'getting-started' }
// ]
\`\`\`

### generateSlug(text)

Converts text to URL-friendly slug.

**Parameters:**
- \`text\` (string): Text to convert

**Returns:**
- string: URL-safe slug

**Example:**

\`\`\`javascript
const slug = generateSlug('Hello World!');
// 'hello-world'
\`\`\`

### flattenDocuments(structure)

Flattens nested document structure into a flat array.

**Parameters:**
- \`structure\` (Array): Document structure array

**Returns:**
- Array<{ title: string, path: string }>

**Example:**

\`\`\`javascript
const flat = flattenDocuments(documentStructure);
// [
//   { title: 'Getting Started', path: 'getting-started.md' },
//   { title: 'Installation', path: 'guide/installation.md' }
// ]
\`\`\`

## Custom Hooks

### useTheme()

Manages theme state and persistence.

**Returns:**
- Object:
  - \`theme\` (string): Current theme ('light' or 'dark')
  - \`toggleTheme\` (function): Function to toggle theme

**Example:**

\`\`\`javascript
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
\`\`\`

### useScrollSpy(headings)

Tracks which heading is currently in view.

**Parameters:**
- \`headings\` (Array<string>): Array of heading IDs to track

**Returns:**
- string: ID of currently active heading

**Example:**

\`\`\`javascript
import { useScrollSpy } from '@/hooks/useScrollSpy';

function TableOfContents({ headings }) {
  const activeId = useScrollSpy(headings.map(h => h.id));
  
  return (
    <nav>
      {headings.map(h => (
        <a 
          key={h.id}
          className={activeId === h.id ? 'active' : ''}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}
\`\`\`

## Components API

### Navbar

Top navigation bar component.

**Props:**
- \`onMenuClick\` (function): Callback when menu button is clicked

**Example:**

\`\`\`jsx
<Navbar onMenuClick={() => setMenuOpen(true)} />
\`\`\`

### Sidebar

Collapsible sidebar navigation.

**Props:**
- \`isOpen\` (boolean): Whether sidebar is open
- \`onClose\` (function): Callback to close sidebar
- \`currentPath\` (string): Currently active document path
- \`onNavigate\` (function): Callback when navigation occurs

**Example:**

\`\`\`jsx
<Sidebar
  isOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
  currentPath="getting-started.md"
  onNavigate={(path) => navigate(path)}
/>
\`\`\`

### TableOfContents

Right-side table of contents.

**Props:**
- \`headings\` (Array): Array of heading objects with \`id\`, \`text\`, and \`level\`

**Example:**

\`\`\`jsx
<TableOfContents headings={[
  { id: 'intro', text: 'Introduction', level: 2 },
  { id: 'features', text: 'Features', level: 2 }
]} />
\`\`\`

### MarkdownRenderer

Renders markdown content with syntax highlighting.

**Props:**
- \`content\` (string): Markdown content to render

**Example:**

\`\`\`jsx
<MarkdownRenderer content="# Hello\n\nWorld" />
\`\`\`

### CodeBlock

Enhanced code block with copy functionality.

**Props:**
- \`children\` (string): Code content
- \`className\` (string): Language class (e.g., "language-javascript")

**Example:**

\`\`\`jsx
<CodeBlock className="language-javascript">
  const hello = 'world';
</CodeBlock>
\`\`\`

### ThemeToggle

Button to toggle between light and dark themes.

**Props:** None

**Example:**

\`\`\`jsx
<ThemeToggle />
\`\`\`

## Markdown Frontmatter

Supported frontmatter fields:

| Field | Type | Description |
|-------|------|-------------|
| \`title\` | string | Page title |
| \`description\` | string | Page description |
| \`author\` | string | Author name |
| \`date\` | string | Publication date |

**Example:**

\`\`\`markdown
---
title: My Document
description: A great document
author: John Doe
date: 2024-01-01
---

Content here...
\`\`\`

## Configuration

### Vite Config

Key configuration options in \`vite.config.js\`:

\`\`\`javascript
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

### Tailwind Config

Theme customization in \`tailwind.config.js\`:

\`\`\`javascript
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Your color scale
        },
      },
    },
  },
}
\`\`\`

## Environment Variables

Available environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| \`VITE_SITE_NAME\` | Site name | "Documentation" |
| \`VITE_GA_ID\` | Google Analytics ID | undefined |

**Usage:**

\`\`\`javascript
const siteName = import.meta.env.VITE_SITE_NAME;
\`\`\`

## Build Commands

### Development

\`\`\`bash
npm run dev
\`\`\`

### Production Build

\`\`\`bash
npm run build
\`\`\`

### Preview Build

\`\`\`bash
npm run preview
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Version History

### v1.0.0 (Current)

- Initial release
- React + Tailwind CSS
- Dark mode support
- Markdown rendering
- Syntax highlighting
- Responsive design
- Netlify deployment

## Contributing

For contribution guidelines, see the repository README.

## Support

For issues and questions, visit the GitHub repository.
