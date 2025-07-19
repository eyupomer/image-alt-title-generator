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
export declare const useImageAlt: (src: string, options?: UseImageAltOptions) => UseImageAltReturn;
//# sourceMappingURL=useImageAlt.d.ts.map