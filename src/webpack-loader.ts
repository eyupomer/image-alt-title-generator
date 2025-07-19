import { ImageNameParser, ImageNameParserOptions } from './utils/imageNameParser';

export interface WebpackLoaderOptions {
  parserOptions?: ImageNameParserOptions;
  generateTitle?: boolean;
  generateAlt?: boolean;
  fallbackAlt?: string;
  fallbackTitle?: string;
}

export default function imageAltGeneratorLoader(
  this: any,
  source: string,
  sourceMap?: any
): string {
  const options: WebpackLoaderOptions = this.getOptions() || {};
  const {
    parserOptions = {},
    generateTitle = true,
    generateAlt = true,
    fallbackAlt = 'Image',
    fallbackTitle = 'Image',
  } = options;

  const parser = new ImageNameParser(parserOptions);

  // Find and replace img tags using simple regex
  const imgTagRegex = /<img([^>]*?)>/g;
  
  const processedSource = source.replace(imgTagRegex, (match, attributes) => {
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
        // Update existing alt
        newAttributes = newAttributes.replace(
          /alt=["']([^"']*)["']/,
          `alt="${newAlt}"`
        );
      } else {
        // Add new alt
        newAttributes += ` alt="${newAlt}"`;
      }
    }

    // Title attribute check
    const hasTitle = /title=["']([^"']*)["']/.test(attributes);
    const titleValue = attributes.match(/title=["']([^"']*)["']/)?.[1] || '';
    
    if (generateTitle && (!hasTitle || !titleValue)) {
      const newTitle = generatedText || fallbackTitle;
      if (hasTitle) {
        // Update existing title
        newAttributes = newAttributes.replace(
          /title=["']([^"']*)["']/,
          `title="${newTitle}"`
        );
      } else {
        // Add new title
        newAttributes += ` title="${newTitle}"`;
      }
    }

    return `<img${newAttributes}>`;
  });

  return processedSource;
} 