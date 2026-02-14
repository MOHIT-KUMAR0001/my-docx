---
title: Usage Guide
description: Learn how to create and manage documentation
---

# Usage Guide

This guide explains how to create and manage documentation content on the platform.

## Writing Markdown

All documentation is written in Markdown format. Here's a quick reference of supported syntax.

### Headings

Use \`#\` symbols for headings:

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
\`\`\`

## Text Formatting

### Basic Formatting

- **Bold text**: \`**bold**\` or \`__bold__\`
- *Italic text*: \`*italic*\` or \`_italic_\`
- \`Inline code\`: Use backticks
- ~~Strikethrough~~: \`~~strikethrough~~\`

### Links

Create links like this:

\`\`\`markdown
[Link text](https://example.com)
\`\`\`

External links automatically open in a new tab with an icon.

## Code Blocks

### Basic Code Block

Use triple backticks with a language identifier:

\`\`\`javascript
function hello() {
  console.log('Hello, world!');
}
\`\`\`

### Supported Languages

The platform supports syntax highlighting for:

- JavaScript/TypeScript
- Python
- HTML/CSS
- JSON
- Bash/Shell
- And many more via highlight.js

## Lists

### Unordered Lists

\`\`\`markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
\`\`\`

### Ordered Lists

\`\`\`markdown
1. First item
2. Second item
3. Third item
\`\`\`

### Task Lists

\`\`\`markdown
- [x] Completed task
- [ ] Incomplete task
\`\`\`

## Tables

Create tables using pipes and hyphens:

\`\`\`markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
\`\`\`

Result:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

## Blockquotes

Use \`>\` for blockquotes:

\`\`\`markdown
> This is a blockquote
> It can span multiple lines
\`\`\`

Result:

> This is a blockquote
> It can span multiple lines

## Images

Add images using:

\`\`\`markdown
![Alt text](/path/to/image.png)
\`\`\`

Place images in the \`public\` folder for easy access.

## Frontmatter

Add metadata to your documents using YAML frontmatter:

\`\`\`markdown
---
title: Page Title
description: Page description for SEO
author: Your Name
date: 2024-01-01
---

Your content here...
\`\`\`

### Supported Fields

- \`title\`: Page title (appears at the top)
- \`description\`: Short description
- \`author\`: Author name
- \`date\`: Publication date
- Custom fields can be added as needed

## File Organization

### Directory Structure

Organize your content logically:

\`\`\`
content/
├── getting-started.md
├── guide/
│   ├── installation.md
│   ├── configuration.md
│   └── usage.md
├── components/
│   ├── button.md
│   └── card.md
└── api-reference.md
\`\`\`

### Naming Conventions

- Use lowercase for filenames
- Use hyphens for spaces: \`getting-started.md\`
- Keep names descriptive and concise

## Best Practices

### Writing Style

1. **Be Clear**: Use simple, direct language
2. **Be Concise**: Get to the point quickly
3. **Use Examples**: Show, don't just tell
4. **Add Context**: Explain why, not just how

### Structure

1. Start with an introduction
2. Use headings to organize content
3. Include code examples where relevant
4. End with next steps or related content

### Maintenance

1. Keep content up to date
2. Test all code examples
3. Check links regularly
4. Update screenshots when UI changes

## Publishing Workflow

### Local Development

1. Create or edit markdown files in \`content/\`
2. Run \`npm run dev\` to preview changes
3. Test navigation and rendering

### Deployment

1. Commit changes to Git
2. Push to GitHub
3. Netlify automatically rebuilds and deploys
4. Changes are live in minutes

## Advanced Features

### Custom Components

You can extend the markdown renderer with custom components for specialized content.

### Search (Coming Soon)

A search feature is planned for future releases to help users find content quickly.

### Tags and Categories (Coming Soon)

Organizational features like tags and categories will be added to improve content discovery.

## Troubleshooting

### Content Not Updating

- Clear browser cache
- Check file paths in documentStructure.js
- Verify markdown syntax

### Styling Issues

- Check Tailwind classes
- Verify CSS imports
- Test in different browsers

## Next Steps

- [Configuration](configuration.md) - Customize your setup
- [Components](../components/button.md) - Explore components
- [API Reference](../api-reference.md) - Technical reference
