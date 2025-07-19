import { Plugin } from 'vite';
import { ImageNameParser, ImageNameParserOptions } from './utils/imageNameParser';

export interface VitePluginOptions {
  parserOptions?: ImageNameParserOptions;
  include?: string[];
  exclude?: string[];
  generateTitle?: boolean;
  generateAlt?: boolean;
  fallbackAlt?: string;
  fallbackTitle?: string;
}

export default function imageAltGeneratorVitePlugin(
  options: VitePluginOptions = {}
): Plugin {
  const {
    parserOptions = {},
    include = [],
    exclude = [],
    generateTitle = true,
    generateAlt = true,
    fallbackAlt = 'Image',
    fallbackTitle = 'Image',
  } = options;

  const parser = new ImageNameParser(parserOptions);

  return {
    name: 'image-alt-title-generator',
    enforce: 'pre',
    
    transform(code: string, id: string) {
      // Process JSX/TSX files and HTML files
      if (!id.match(/\.(jsx?|tsx?|html|vue|svelte)$/)) {
        return null;
      }

      // File filtering
      if (exclude.length > 0 && exclude.some(pattern => id.includes(pattern))) {
        return null;
      }
      if (include.length > 0 && !include.some(pattern => id.includes(pattern))) {
        return null;
      }

      // Find and replace img tags (both <img> and <img />)
      const imgTagRegex = /<img([^>]*?)(\/?)>/g;
      let modified = false;
      let newCode = code;

      newCode = code.replace(imgTagRegex, (match, attributes, selfClosing) => {
        // Find src attribute
        const srcMatch = attributes.match(/src=["']([^"']+)["']/);
        if (!srcMatch) {
          return match; // Don't modify if no src
        }

        const srcValue = srcMatch[1];
        const generatedText = parser.parseFromSrc(srcValue);

        let newAttributes = attributes;

        // Alt attribute check
        const hasAlt = /alt=["']([^"']*)["']/.test(attributes);
        const altValue = attributes.match(/alt=["']([^"']*)["']/)?.[1] || '';
        
        if (generateAlt && (!hasAlt || !altValue)) {
          const newAlt = generatedText || fallbackAlt;
          if (hasAlt) {
            // Update existing alt (only if empty)
            newAttributes = newAttributes.replace(
              /alt=["']([^"']*)["']/,
              `alt="${newAlt}"`
            );
          } else {
            // Add new alt
            newAttributes += ` alt="${newAlt}"`;
          }
          modified = true;
        }

        // Title attribute check
        const hasTitle = /title=["']([^"']*)["']/.test(attributes);
        const titleValue = attributes.match(/title=["']([^"']*)["']/)?.[1] || '';
        
        if (generateTitle && (!hasTitle || !titleValue)) {
          const newTitle = generatedText || fallbackTitle;
          if (hasTitle) {
            // Update existing title (only if empty)
            newAttributes = newAttributes.replace(
              /title=["']([^"']*)["']/,
              `title="${newTitle}"`
            );
          } else {
            // Add new title
            newAttributes += ` title="${newTitle}"`;
          }
          modified = true;
        }

        // Preserve self-closing syntax
        return `<img${newAttributes}${selfClosing}>`;
      });

      return modified ? { code: newCode, map: null } : null;
    }
  };
} 