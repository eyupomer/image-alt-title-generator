'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

class ImageNameParser {
    constructor(options = {}) {
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
    parseImageName(fileName) {
        if (!fileName)
            return '';
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
            name = lodash.startCase(lodash.lowerCase(name));
        }
        else {
            name = lodash.lowerCase(name);
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
    removeFileExtension(fileName) {
        return fileName.replace(/\.[^/.]+$/, '');
    }
    /**
     * Separates camel case text with spaces
     */
    separateCamelCase(text) {
        return text.replace(/([A-Z])/g, ' $1');
    }
    /**
     * Extracts filename from URL
     */
    extractFileNameFromUrl(url) {
        if (!url)
            return '';
        // Get filename from URL
        const urlParts = url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        // Remove query parameters
        return fileName.split('?')[0];
    }
    /**
     * Extracts filename from src attribute and parses it
     */
    parseFromSrc(src) {
        const fileName = this.extractFileNameFromUrl(src);
        return this.parseImageName(fileName);
    }
}
// Default parser instance
const defaultParser = new ImageNameParser();

function imageAltGeneratorLoader(source, sourceMap) {
    const options = this.getOptions() || {};
    const { parserOptions = {}, generateTitle = true, generateAlt = true, fallbackAlt = 'Image', fallbackTitle = 'Image', } = options;
    const parser = new ImageNameParser(parserOptions);
    // Find and replace img tags using simple regex
    const imgTagRegex = /<img([^>]*?)>/g;
    const processedSource = source.replace(imgTagRegex, (match, attributes) => {
        var _a, _b;
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
        const altValue = ((_a = attributes.match(/alt=["']([^"']*)["']/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
        if (generateAlt && (!hasAlt || !altValue)) {
            const newAlt = generatedText || fallbackAlt;
            if (hasAlt) {
                // Update existing alt
                newAttributes = newAttributes.replace(/alt=["']([^"']*)["']/, `alt="${newAlt}"`);
            }
            else {
                // Add new alt
                newAttributes += ` alt="${newAlt}"`;
            }
        }
        // Title attribute check
        const hasTitle = /title=["']([^"']*)["']/.test(attributes);
        const titleValue = ((_b = attributes.match(/title=["']([^"']*)["']/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
        if (generateTitle && (!hasTitle || !titleValue)) {
            const newTitle = generatedText || fallbackTitle;
            if (hasTitle) {
                // Update existing title
                newAttributes = newAttributes.replace(/title=["']([^"']*)["']/, `title="${newTitle}"`);
            }
            else {
                // Add new title
                newAttributes += ` title="${newTitle}"`;
            }
        }
        return `<img${newAttributes}>`;
    });
    return processedSource;
}

function imageAltGeneratorVitePlugin(options = {}) {
    const { parserOptions = {}, include = [], exclude = [], generateTitle = true, generateAlt = true, fallbackAlt = 'Image', fallbackTitle = 'Image', } = options;
    const parser = new ImageNameParser(parserOptions);
    return {
        name: 'image-alt-title-generator',
        enforce: 'pre',
        transform(code, id) {
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
                var _a, _b;
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
                const altValue = ((_a = attributes.match(/alt=["']([^"']*)["']/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
                if (generateAlt && (!hasAlt || !altValue)) {
                    const newAlt = generatedText || fallbackAlt;
                    if (hasAlt) {
                        // Update existing alt (only if empty)
                        newAttributes = newAttributes.replace(/alt=["']([^"']*)["']/, `alt="${newAlt}"`);
                    }
                    else {
                        // Add new alt
                        newAttributes += ` alt="${newAlt}"`;
                    }
                    modified = true;
                }
                // Title attribute check
                const hasTitle = /title=["']([^"']*)["']/.test(attributes);
                const titleValue = ((_b = attributes.match(/title=["']([^"']*)["']/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
                if (generateTitle && (!hasTitle || !titleValue)) {
                    const newTitle = generatedText || fallbackTitle;
                    if (hasTitle) {
                        // Update existing title (only if empty)
                        newAttributes = newAttributes.replace(/title=["']([^"']*)["']/, `title="${newTitle}"`);
                    }
                    else {
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

// Utils (Framework-agnostic)
// Default exports - this allows both named and default imports
const imageAltTitleGenerator = {
    ImageNameParser,
    defaultParser,
    webpackLoader: imageAltGeneratorLoader,
    vitePlugin: imageAltGeneratorVitePlugin,
};

exports.ImageNameParser = ImageNameParser;
exports.default = imageAltTitleGenerator;
exports.defaultParser = defaultParser;
exports.imageAltGenerator = imageAltGeneratorVitePlugin;
exports.vitePlugin = imageAltGeneratorVitePlugin;
exports.webpackLoader = imageAltGeneratorLoader;
//# sourceMappingURL=index.js.map
