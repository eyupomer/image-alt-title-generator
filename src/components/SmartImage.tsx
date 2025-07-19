import React, { forwardRef, useMemo } from 'react';
import { ImageNameParser, ImageNameParserOptions } from '../utils/imageNameParser';

export interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  parserOptions?: ImageNameParserOptions;
  customParser?: ImageNameParser;
  fallbackAlt?: string;
  fallbackTitle?: string;
  generateTitle?: boolean;
  generateAlt?: boolean;
}

export const SmartImage = forwardRef<HTMLImageElement, SmartImageProps>(
  (
    {
      src,
      alt,
      title,
      parserOptions,
      customParser,
      fallbackAlt = 'Image',
      fallbackTitle = 'Image',
      generateTitle = true,
      generateAlt = true,
      ...props
    },
    ref
  ) => {
    const parser = useMemo(() => {
      return customParser || new ImageNameParser(parserOptions);
    }, [customParser, parserOptions]);

    const generatedText = useMemo(() => {
      if (!src) return '';
      return parser.parseFromSrc(src);
    }, [src, parser]);

    const finalAlt = useMemo(() => {
      // Use provided alt if available
      if (alt !== undefined && alt !== '') {
        return alt;
      }
      
      // Use fallback if alt generation is disabled
      if (!generateAlt) {
        return fallbackAlt;
      }
      
      // Use generated text
      return generatedText || fallbackAlt;
    }, [alt, generateAlt, generatedText, fallbackAlt]);

    const finalTitle = useMemo(() => {
      // Use provided title if available
      if (title !== undefined && title !== '') {
        return title;
      }
      
      // Use fallback if title generation is disabled
      if (!generateTitle) {
        return fallbackTitle;
      }
      
      // Use generated text
      return generatedText || fallbackTitle;
    }, [title, generateTitle, generatedText, fallbackTitle]);

    return (
      <img
        ref={ref}
        src={src}
        alt={finalAlt}
        title={finalTitle}
        {...props}
      />
    );
  }
);

SmartImage.displayName = 'SmartImage'; 