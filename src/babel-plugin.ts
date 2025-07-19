import { PluginObj, NodePath } from '@babel/core';
import * as t from '@babel/types';
import { ImageNameParser, ImageNameParserOptions } from './utils/imageNameParser';

export interface BabelPluginOptions {
  parserOptions?: ImageNameParserOptions;
  include?: string[];
  exclude?: string[];
  generateTitle?: boolean;
  generateAlt?: boolean;
  fallbackAlt?: string;
  fallbackTitle?: string;
}

export default function imageAltGeneratorPlugin(
  babel: any,
  options: BabelPluginOptions = {}
): PluginObj {
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

  // Helper function to process img attributes
  const processImgAttributes = (attributes: (t.JSXAttribute | t.JSXSpreadAttribute)[]) => {
    let srcAttribute: t.JSXAttribute | null = null;
    let altAttribute: t.JSXAttribute | null = null;
    let titleAttribute: t.JSXAttribute | null = null;

    // Find existing attributes (only JSXAttribute, skip JSXSpreadAttribute)
    attributes.forEach(attr => {
      if (attr.type === 'JSXAttribute') {
        if (attr.name.name === 'src') {
          srcAttribute = attr;
        } else if (attr.name.name === 'alt') {
          altAttribute = attr;
        } else if (attr.name.name === 'title') {
          titleAttribute = attr;
        }
      }
    });

    // Skip if no src attribute or if src value is not a string literal
    if (!srcAttribute || !srcAttribute.value || srcAttribute.value.type !== 'StringLiteral') {
      return;
    }

    const srcValue = (srcAttribute.value as t.StringLiteral).value;
    const generatedText = parser.parseFromSrc(srcValue);

    // Add alt attribute if missing or empty
    if (generateAlt && (!altAttribute || 
        !altAttribute.value || 
        altAttribute.value.type !== 'StringLiteral' || 
        !(altAttribute.value as t.StringLiteral).value)) {
      const newAltAttribute = t.jsxAttribute(
        t.jsxIdentifier('alt'),
        t.stringLiteral(generatedText || fallbackAlt)
      );
      
      if (altAttribute) {
        // Update existing alt attribute
        altAttribute.value = newAltAttribute.value;
      } else {
        // Add new alt attribute
        attributes.push(newAltAttribute);
      }
    }

    // Add title attribute if missing or empty
    if (generateTitle && (!titleAttribute || 
        !titleAttribute.value || 
        titleAttribute.value.type !== 'StringLiteral' || 
        !(titleAttribute.value as t.StringLiteral).value)) {
      const newTitleAttribute = t.jsxAttribute(
        t.jsxIdentifier('title'),
        t.stringLiteral(generatedText || fallbackTitle)
      );
      
      if (titleAttribute) {
        // Update existing title attribute
        titleAttribute.value = newTitleAttribute.value;
      } else {
        // Add new title attribute
        attributes.push(newTitleAttribute);
      }
    }
  };

  return {
    name: 'image-alt-title-generator',
    visitor: {
      // Handle both JSXElement (for <img></img>) and JSXOpeningElement (for <img />)
      JSXElement(path: NodePath<t.JSXElement>) {
        const { node } = path;
        
        // Only process img tags
        if (node.openingElement.name.type !== 'JSXIdentifier' || 
            node.openingElement.name.name !== 'img') {
          return;
        }

        // File path check
        const filename = this.file?.opts?.filename || '';
        if (exclude.length > 0 && exclude.some(pattern => filename.includes(pattern))) {
          return;
        }
        if (include.length > 0 && !include.some(pattern => filename.includes(pattern))) {
          return;
        }

        processImgAttributes(node.openingElement.attributes);
      },

      // Handle self-closing img tags (<img />)
      JSXOpeningElement(path: NodePath<t.JSXOpeningElement>) {
        const { node } = path;
        
        // Only process img tags
        if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'img') {
          return;
        }

        // File path check
        const filename = this.file?.opts?.filename || '';
        if (exclude.length > 0 && exclude.some(pattern => filename.includes(pattern))) {
          return;
        }
        if (include.length > 0 && !include.some(pattern => filename.includes(pattern))) {
          return;
        }

        processImgAttributes(node.attributes);
      }
    }
  };
} 