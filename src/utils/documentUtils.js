// This file handles dynamic document loading and parsing

export async function loadDocument(path) {
  try {
    // In a real setup, this would dynamically import markdown files
    // For now, we'll use a static import pattern that Vite can handle
    const modules = import.meta.glob('/content/**/*.md', { as: 'raw' });
    
    const fullPath = `/content/${path}`;
    
    if (modules[fullPath]) {
      const content = await modules[fullPath]();
      return content;
    }
    
    throw new Error(`Document not found: ${path}`);
  } catch (error) {
    console.error('Error loading document:', error);
    return null;
  }
}

export function parseMarkdownMeta(content) {
  // Extract frontmatter if present
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  let meta = {};
  let markdown = content;
  
  if (match) {
    const frontmatter = match[1];
    markdown = content.slice(match[0].length).trim();
    
    // Parse simple key: value pairs
    frontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        meta[key.trim()] = valueParts.join(':').trim();
      }
    });
  }
  
  // If no title in frontmatter, extract from first heading
  if (!meta.title) {
    const headingMatch = markdown.match(/^#\s+(.+)$/m);
    if (headingMatch) {
      meta.title = headingMatch[1];
    }
  }
  
  return { meta, content: markdown };
}

export function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    headings.push({ level, text, id });
  }
  
  return headings;
}

export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
