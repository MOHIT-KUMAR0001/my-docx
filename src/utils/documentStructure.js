// Document structure configuration
// This would be automatically generated from file system in a real implementation

export const documentStructure = [
  {
    title: 'Getting Started',
    path: 'getting-started.md',
    children: []
  },
  {
    title: 'Guide',
    children: [
      {
        title: 'Installation',
        path: 'guide/installation.md'
      },
      {
        title: 'Configuration',
        path: 'guide/configuration.md'
      },
      {
        title: 'Usage',
        path: 'guide/usage.md'
      }
    ]
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Button',
        path: 'components/button.md'
      },
      {
        title: 'Card',
        path: 'components/card.md'
      }
    ]
  },
  {
    title: 'API Reference',
    path: 'api-reference.md',
    children: []
  }
];

// Helper to flatten document structure for routing
export function flattenDocuments(structure) {
  const flattened = [];
  
  function traverse(items) {
    items.forEach(item => {
      if (item.path) {
        flattened.push({
          title: item.title,
          path: item.path
        });
      }
      if (item.children && item.children.length > 0) {
        traverse(item.children);
      }
    });
  }
  
  traverse(structure);
  return flattened;
}

// Get the first document path as default
export function getDefaultDocPath(structure) {
  for (const item of structure) {
    if (item.path) return item.path;
    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        if (child.path) return child.path;
      }
    }
  }
  return 'getting-started.md';
}
