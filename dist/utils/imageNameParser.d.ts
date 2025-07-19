export interface ImageNameParserOptions {
    prefix?: string;
    suffix?: string;
    capitalize?: boolean;
    removeNumbers?: boolean;
    customMappings?: Record<string, string>;
}
export declare class ImageNameParser {
    private options;
    constructor(options?: ImageNameParserOptions);
    /**
     * Creates meaningful text from image filename
     */
    parseImageName(fileName: string): string;
    /**
     * Removes file extension
     */
    private removeFileExtension;
    /**
     * Separates camel case text with spaces
     */
    private separateCamelCase;
    /**
     * Extracts filename from URL
     */
    extractFileNameFromUrl(url: string): string;
    /**
     * Extracts filename from src attribute and parses it
     */
    parseFromSrc(src: string): string;
}
export declare const defaultParser: ImageNameParser;
//# sourceMappingURL=imageNameParser.d.ts.map