---
title: Button Component
description: Documentation for the Button component
---

# Button Component

The Button component is a versatile, accessible button element with multiple variants and sizes.

## Overview

Buttons are interactive elements that trigger actions when clicked. This component provides a consistent, styled button for use throughout your application.

## Basic Usage

Here's a simple example of using a button:

\`\`\`jsx
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
  Click Me
</button>
\`\`\`

## Variants

### Primary Button

The default button style for primary actions:

\`\`\`jsx
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
  Primary Action
</button>
\`\`\`

### Secondary Button

For secondary actions:

\`\`\`jsx
<button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
  Secondary Action
</button>
\`\`\`

### Outline Button

For less prominent actions:

\`\`\`jsx
<button className="px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
  Outline Button
</button>
\`\`\`

### Ghost Button

Minimal style for tertiary actions:

\`\`\`jsx
<button className="px-4 py-2 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
  Ghost Button
</button>
\`\`\`

## Sizes

### Small

\`\`\`jsx
<button className="px-3 py-1.5 text-sm bg-primary-600 text-white rounded-lg">
  Small Button
</button>
\`\`\`

### Medium (Default)

\`\`\`jsx
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
  Medium Button
</button>
\`\`\`

### Large

\`\`\`jsx
<button className="px-6 py-3 text-lg bg-primary-600 text-white rounded-lg">
  Large Button
</button>
\`\`\`

## States

### Disabled

\`\`\`jsx
<button 
  disabled 
  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-lg cursor-not-allowed"
>
  Disabled Button
</button>
\`\`\`

### Loading

\`\`\`jsx
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2">
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>
\`\`\`

## With Icons

### Icon Left

\`\`\`jsx
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2">
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Add Item
</button>
\`\`\`

### Icon Right

\`\`\`jsx
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2">
  Continue
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>
\`\`\`

### Icon Only

\`\`\`jsx
<button className="p-2 bg-primary-600 text-white rounded-lg" aria-label="Settings">
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</button>
\`\`\`

## Accessibility

Always ensure buttons are accessible:

- Use semantic \`<button>\` elements
- Provide \`aria-label\` for icon-only buttons
- Include focus states with \`focus:ring\` classes
- Use appropriate color contrast
- Disable pointer events on disabled buttons

## Best Practices

1. **Use appropriate variants**: Primary for main actions, secondary for alternatives
2. **Consistent sizing**: Stick to standard sizes across your app
3. **Clear labels**: Button text should clearly indicate the action
4. **Loading states**: Show feedback for async operations
5. **Keyboard navigation**: Ensure buttons work with keyboard
6. **Touch targets**: Maintain minimum 44px touch target size

## Related Components

- [Card Component](card.md) - Container component
- [Form Elements](../api-reference.md) - Input components

## Examples in Context

### Call to Action

\`\`\`jsx
<div className="text-center space-y-4">
  <h2 className="text-3xl font-bold">Ready to get started?</h2>
  <p className="text-gray-600 dark:text-gray-400">
    Join thousands of developers using our platform.
  </p>
  <div className="flex gap-4 justify-center">
    <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
      Get Started
    </button>
    <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
      Learn More
    </button>
  </div>
</div>
\`\`\`

### Action Group

\`\`\`jsx
<div className="flex gap-2">
  <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
    Delete
  </button>
  <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg">
    Cancel
  </button>
</div>
\`\`\`
