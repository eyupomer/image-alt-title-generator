import { useMemo } from 'react';
import { ImageNameParser, ImageNameParserOptions } from '../utils/imageNameParser';

export interface UseImageAltOptions {
  parserOptions?: ImageNameParserOptions;
  customParser?: ImageNameParser;
  fallbackAlt?: string;
  fallbackTitle?: string;
  generateTitle?: boolean;
  generateAlt?: boolean;
}

export interface UseImageAltReturn {
  alt: string;
  title: string;
  generatedText: string;
}

export const useImageAlt = (
  src: string,
  options: UseImageAltOptions = {}
): UseImageAltReturn => {
  const {
    parserOptions,
    customParser,
    fallbackAlt = 'Image',
    fallbackTitle = 'Image',
    generateTitle = true,
    generateAlt = true,
  } = options;

  const parser = useMemo(() => {
    return customParser || new ImageNameParser(parserOptions);
  }, [customParser, parserOptions]);

  const generatedText = useMemo(() => {
    if (!src) return '';
    return parser.parseFromSrc(src);
  }, [src, parser]);

  const alt = useMemo(() => {
    if (!generateAlt) {
      return fallbackAlt;
    }
    return generatedText || fallbackAlt;
  }, [generateAlt, generatedText, fallbackAlt]);

  const title = useMemo(() => {
    if (!generateTitle) {
      return fallbackTitle;
    }
    return generatedText || fallbackTitle;
  }, [generateTitle, generatedText, fallbackTitle]);

  return {
    alt,
    title,
    generatedText,
  };
}; 