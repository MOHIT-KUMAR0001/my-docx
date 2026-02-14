---
title: Card Component
description: Documentation for the Card component
---

# Card Component

The Card component is a flexible container for grouping related content with a consistent visual style.

## Overview

Cards are surface components that display content and actions on a single topic. They should be easy to scan for relevant information.

## Basic Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This is the card content. It can contain any elements you need.
  </p>
</div>
\`\`\`

## Variants

### Elevated Card

Card with shadow elevation:

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
  <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This card has a stronger shadow for more emphasis.
  </p>
</div>
\`\`\`

### Outlined Card

Card with border and no shadow:

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600 p-6">
  <h3 className="text-xl font-semibold mb-2">Outlined Card</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This card uses a border instead of a shadow.
  </p>
</div>
\`\`\`

### Flat Card

Minimal card with background only:

\`\`\`jsx
<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
  <h3 className="text-xl font-semibold mb-2">Flat Card</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This card has no shadow or border.
  </p>
</div>
\`\`\`

## With Media

### Image Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
  <img 
    src="/path/to/image.jpg" 
    alt="Card image" 
    className="w-full h-48 object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Image Card</h3>
    <p className="text-gray-600 dark:text-gray-400">
      Card with an image at the top.
    </p>
  </div>
</div>
\`\`\`

### Icon Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
  <p className="text-gray-600 dark:text-gray-400">
    Description of the feature.
  </p>
</div>
\`\`\`

## Interactive Cards

### Clickable Card

\`\`\`jsx
<button className="w-full text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
  <h3 className="text-xl font-semibold mb-2">Clickable Card</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This entire card is clickable.
  </p>
</button>
\`\`\`

### Hoverable Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer">
  <h3 className="text-xl font-semibold mb-2">Hoverable Card</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This card scales on hover.
  </p>
</div>
\`\`\`

## Card with Actions

### Footer Actions

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600 dark:text-gray-400">
      Card content goes here.
    </p>
  </div>
  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex gap-2">
    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
      Primary
    </button>
    <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
      Secondary
    </button>
  </div>
</div>
\`\`\`

### Header Actions

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  <div className="flex items-start justify-between mb-4">
    <h3 className="text-xl font-semibold">Card Title</h3>
    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <p className="text-gray-600 dark:text-gray-400">
    Card content goes here.
  </p>
</div>
\`\`\`

## Grid Layouts

### Two Column Grid

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-2">Card 1</h3>
    <p className="text-gray-600 dark:text-gray-400">Content</p>
  </div>
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-2">Card 2</h3>
    <p className="text-gray-600 dark:text-gray-400">Content</p>
  </div>
</div>
\`\`\`

### Three Column Grid

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Multiple cards */}
</div>
\`\`\`

## Sizes

### Small Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
  <h3 className="text-lg font-semibold mb-1">Small Card</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">
    Compact card content.
  </p>
</div>
\`\`\`

### Large Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl">
  <h3 className="text-2xl font-semibold mb-4">Large Card</h3>
  <p className="text-lg text-gray-600 dark:text-gray-400">
    More spacious card content.
  </p>
</div>
\`\`\`

## Best Practices

1. **Keep it simple**: Don't overcrowd cards with too much content
2. **Consistent spacing**: Use consistent padding across cards
3. **Clear hierarchy**: Use typography to establish content hierarchy
4. **Proper contrast**: Ensure text is readable on card backgrounds
5. **Responsive design**: Cards should work well on all screen sizes
6. **Purposeful actions**: Only add actions that are relevant to the card content

## Accessibility

- Use semantic HTML elements (\`<article>\`, \`<section>\`)
- Ensure sufficient color contrast
- Provide alt text for images
- Make interactive cards keyboard accessible
- Use ARIA labels when needed

## Related Components

- [Button Component](button.md) - For card actions
- [Grid Layouts](../guide/usage.md) - For organizing cards

## Real-World Examples

### Feature Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    Optimized for performance with static site generation.
  </p>
  <a href="#" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
    Learn more →
  </a>
</div>
\`\`\`

### Pricing Card

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border-2 border-primary-500">
  <div className="text-center mb-6">
    <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
    <div className="flex items-baseline justify-center">
      <span className="text-4xl font-bold">$29</span>
      <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
    </div>
  </div>
  <ul className="space-y-3 mb-6">
    <li className="flex items-center gap-2">
      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      Unlimited projects
    </li>
    <li className="flex items-center gap-2">
      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      Priority support
    </li>
  </ul>
  <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
    Get Started
  </button>
</div>
\`\`\`
