# Image Alt Title Generator

Automatically generate meaningful `alt` and `title` attributes for images in web projects at build time, improving accessibility and SEO without requiring developers to manually add these attributes. Works with React, Vue, Angular, Svelte, vanilla HTML, and any other web framework.

## Features

- 🚀 **Build-time processing**: Automatically processes all `img` tags during build
- 🎯 **Smart parsing**: Converts image filenames into meaningful, human-readable descriptions
- 🔧 **Multiple build systems**: Supports Vite, Webpack, and Babel
- ⚙️ **Flexible configuration**: Customizable parsing options and fallbacks
- 🛡️ **Safe**: Only processes images without existing alt/title attributes
- 📦 **Zero runtime overhead**: All processing happens at build time
- 🌐 **Framework-agnostic**: Works with any web framework or vanilla HTML

## Installation

```bash
npm install image-alt-title-generator
```

## Quick Start

### 1. Babel Plugin (Recommended for most projects)

Add to your `.babelrc` or `babel.config.js`:

```javascript
module.exports = {
  presets: ['@babel/preset-react'], // or any other preset you use
  plugins: [
    ['image-alt-title-generator/babel', {
      parserOptions: {
        prefix: 'Photo of',
        suffix: 'image',
        removeNumbers: true,
        customMappings: {
          'logo': 'Company Logo',
          'avatar': 'User Avatar Image'
        }
      },
      generateTitle: true,
      generateAlt: true,
      fallbackAlt: 'Image',
      fallbackTitle: 'Image'
    }]
  ]
};
```

### 2. Vite Plugin

Add to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, svelte, etc.
import { imageAltGenerator } from 'image-alt-title-generator'

export default defineConfig({
  plugins: [
    react(), // or your framework plugin
    imageAltGenerator({
      parserOptions: {
        prefix: '',
        suffix: '',
        removeNumbers: true,
        customMappings: {
          'logo': 'Company Logo',
          'avatar': 'User Avatar Image'
        }
      },
      generateTitle: true,
      generateAlt: true,
      fallbackAlt: 'Image',
      fallbackTitle: 'Image'
    })
  ],
})
```

**Alternative import syntax:**
```typescript
import { vitePlugin as imageAltGenerator } from 'image-alt-title-generator'
```

### 3. Webpack Loader

Add to your `webpack.config.js`:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|html|vue|svelte)$/,
        use: [
          {
            loader: 'image-alt-title-generator/webpack',
            options: {
              parserOptions: {
                prefix: 'Photo of',
                suffix: 'image',
                removeNumbers: true,
                customMappings: {
                  'logo': 'Company Logo',
                  'avatar': 'User Avatar Image'
                }
              },
              generateTitle: true,
              generateAlt: true,
              fallbackAlt: 'Image',
              fallbackTitle: 'Image'
            }
          }
        ]
      }
    ]
  }
};
```

## Usage Examples

### React/JSX
```jsx
// Before build
<img src="/images/user-profile.jpg" />
<img src="/images/avatar.png" />
<img src="/images/product_photo_1.webp" />
<img src="/images/logo.svg" />

// After build (automatically generated)
<img src="/images/user-profile.jpg" alt="Photo of User Profile image" title="Photo of User Profile image" />
<img src="/images/avatar.png" alt="User Avatar Image" title="User Avatar Image" />
<img src="/images/product_photo_1.webp" alt="Photo of Product Photo image" title="Photo of Product Photo image" />
<img src="/images/logo.svg" alt="Company Logo" title="Company Logo" />
```

### Vue
```vue
<template>
  <!-- Before build -->
  <img src="/images/hero-banner.jpg" />
  <img src="/images/icon-home.svg" />
  
  <!-- After build -->
  <img src="/images/hero-banner.jpg" alt="Photo of Hero Banner image" title="Photo of Hero Banner image" />
  <img src="/images/icon-home.svg" alt="Photo of Icon Home image" title="Photo of Icon Home image" />
</template>
```

### Vanilla HTML
```html
<!-- Before build -->
<img src="/images/background.jpg" />
<img src="/images/logo.png" />

<!-- After build -->
<img src="/images/background.jpg" alt="Photo of Background image" title="Photo of Background image" />
<img src="/images/logo.png" alt="Company Logo" title="Company Logo" />
```

### Angular
```html
<!-- Before build -->
<img src="/assets/images/dashboard.png" />
<img src="/assets/images/user-avatar.jpg" />

<!-- After build -->
<img src="/assets/images/dashboard.png" alt="Photo of Dashboard image" title="Photo of Dashboard image" />
<img src="/assets/images/user-avatar.jpg" alt="Photo of User Avatar image" title="Photo of User Avatar image" />
```

**⚠️ Important: Correct HTML/JSX Syntax**
Make sure your `img` tags use proper syntax. The attributes should be inside the opening tag:

```jsx
// ✅ Correct syntax
<img src="/company-logo.svg" alt="Photo of Company Logo image" title="Photo of Company Logo image" />

// ❌ Incorrect syntax (will cause build errors)
<img src="/company-logo.svg" / alt="Photo of Company Logo image" title="Photo of Company Logo image">
```

Images with existing `alt` or `title` attributes will not be modified:

```jsx
// This will remain unchanged
<img src="/images/custom-image.jpg" alt="Custom description" title="Custom title" />
```

## ⚠️ Important Limitation: Variable `src` Values

**This library can only generate `alt` and `title` attributes automatically when the `src` attribute is a string literal.**

- ✅ **Works:**
  ```jsx
  <img src="/images/user-profile.jpg" />
  ```
- ❌ **Does NOT work:**
  ```jsx
  import viteLogo from '/vite.svg';
  <img src={viteLogo} />
  ```

**Why?**
- The Babel (and Vite/Webpack) plugins operate at build time and only see the code structure, not the actual values of variables.
- When you use a variable for `src` (e.g., `src={viteLogo}`), the plugin cannot determine the file path or name, so it cannot generate a meaningful `alt` or `title`.
- This is a technical limitation of how static code analysis works in build tools.

**Best Practice:**
- For automatic alt/title generation, always use string literals for the `src` attribute:
  ```jsx
  <img src="/images/logo.svg" />
  ```
- If you must use a variable, you need to provide your own `alt` and `title` attributes manually:
  ```jsx
  import logo from '/logo.svg';
  <img src={logo} alt="Company Logo" title="Company Logo" />
  ```

## Configuration Options

### Parser Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prefix` | `string` | `''` | Text to add before the generated description |
| `suffix` | `string` | `''` | Text to add after the generated description |
| `capitalize` | `boolean` | `true` | Whether to capitalize the generated text |
| `removeNumbers` | `boolean` | `false` | Whether to remove numbers from filenames |
| `customMappings` | `object` | `{}` | Custom mappings for specific filenames |

### Plugin Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `generateAlt` | `boolean` | `true` | Whether to generate alt attributes |
| `generateTitle` | `boolean` | `true` | Whether to generate title attributes |
| `fallbackAlt` | `string` | `'Image'` | Fallback alt text if parsing fails |
| `fallbackTitle` | `string` | `'Image'` | Fallback title text if parsing fails |
| `include` | `string[]` | `[]` | File patterns to include (if empty, all files are processed) |
| `exclude` | `string[]` | `[]` | File patterns to exclude |

## API Reference

### ImageNameParser

Utility class for parsing image filenames:

```javascript
import { ImageNameParser } from 'image-alt-title-generator';

const parser = new ImageNameParser({
  prefix: 'Photo of',
  suffix: 'image',
  removeNumbers: true,
  customMappings: {
    'logo': 'Company Logo'
  }
});

const result = parser.parseImageName('user-profile.jpg');
console.log(result); // "Photo of User Profile image"
```

## Framework Support

This library works with any web framework that uses standard HTML `<img>` tags:

- ✅ **React** (JSX/TSX)
- ✅ **Vue** (.vue files)
- ✅ **Angular** (HTML templates)
- ✅ **Svelte** (.svelte files)
- ✅ **Vanilla HTML**
- ✅ **Any other framework** that outputs HTML

## Migration from react-image-alt-generator

If you're migrating from the old `react-image-alt-generator` package:

1. **Install the new package:**
   ```bash
   npm uninstall react-image-alt-generator
   npm install image-alt-title-generator
   ```

2. **Update your configuration files:**
   - Change `react-image-alt-generator` to `image-alt-title-generator` in your config files
   - The API remains the same, so no other changes are needed

3. **Update imports (if any):**
   ```javascript
   // Old
   import { useImageAlt } from 'react-image-alt-generator';
   
   // New
   import { useImageAlt } from 'image-alt-title-generator';
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details. 