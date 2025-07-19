import React from 'react';
import { ImageNameParser, ImageNameParserOptions } from '../utils/imageNameParser';
export interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    parserOptions?: ImageNameParserOptions;
    customParser?: ImageNameParser;
    fallbackAlt?: string;
    fallbackTitle?: string;
    generateTitle?: boolean;
    generateAlt?: boolean;
}
export declare const SmartImage: React.ForwardRefExoticComponent<SmartImageProps & React.RefAttributes<HTMLImageElement>>;
//# sourceMappingURL=SmartImage.d.ts.map