import { camelCase, startCase, lowerCase } from 'lodash';

export interface ImageNameParserOptions {
  prefix?: string;
  suffix?: string;
  capitalize?: boolean;
  removeNumbers?: boolean;
  customMappings?: Record<string, string>;
}

export class ImageNameParser {
  private options: ImageNameParserOptions;

  constructor(options: ImageNameParserOptions = {}) {
    this.options = {
      prefix: '',
      suffix: '',
      capitalize: true,
      removeNumbers: false,
      customMappings: {},
      ...options,
    };
  }

  /**
   * Creates meaningful text from image filename
   */
  parseImageName(fileName: string): string {
    if (!fileName) return '';

    // Remove file extension
    let name = this.removeFileExtension(fileName);
    
    // Check custom mappings
    if (this.options.customMappings && this.options.customMappings[name]) {
      return this.options.customMappings[name];
    }

    // Remove numbers (optional)
    if (this.options.removeNumbers) {
      name = name.replace(/\d+/g, '');
    }

    // Replace underscores, dashes and dots with spaces
    name = name.replace(/[_\.-]/g, ' ');

    // Separate camel case with spaces
    name = this.separateCamelCase(name);

    // Clean up extra spaces
    name = name.replace(/\s+/g, ' ').trim();

    // Convert to title case
    if (this.options.capitalize) {
      name = startCase(lowerCase(name));
    } else {
      name = lowerCase(name);
    }

    // Add prefix and suffix
    if (this.options.prefix) {
      name = `${this.options.prefix} ${name}`;
    }
    if (this.options.suffix) {
      name = `${name} ${this.options.suffix}`;
    }

    return name;
  }

  /**
   * Removes file extension
   */
  private removeFileExtension(fileName: string): string {
    return fileName.replace(/\.[^/.]+$/, '');
  }

  /**
   * Separates camel case text with spaces
   */
  private separateCamelCase(text: string): string {
    return text.replace(/([A-Z])/g, ' $1');
  }

  /**
   * Extracts filename from URL
   */
  extractFileNameFromUrl(url: string): string {
    if (!url) return '';
    
    // Get filename from URL
    const urlParts = url.split('/');
    const fileName = urlParts[urlParts.length - 1];
    
    // Remove query parameters
    return fileName.split('?')[0];
  }

  /**
   * Extracts filename from src attribute and parses it
   */
  parseFromSrc(src: string): string {
    const fileName = this.extractFileNameFromUrl(src);
    return this.parseImageName(fileName);
  }
}

// Default parser instance
export const defaultParser = new ImageNameParser(); 