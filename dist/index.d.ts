import { PluginObj } from '@babel/core';
import { Plugin } from 'vite';

interface ImageNameParserOptions {
    prefix?: string;
    suffix?: string;
    capitalize?: boolean;
    removeNumbers?: boolean;
    customMappings?: Record<string, string>;
}
declare class ImageNameParser {
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
declare const defaultParser: ImageNameParser;

interface BabelPluginOptions {
    parserOptions?: ImageNameParserOptions;
    include?: string[];
    exclude?: string[];
    generateTitle?: boolean;
    generateAlt?: boolean;
    fallbackAlt?: string;
    fallbackTitle?: string;
}
declare function imageAltGeneratorPlugin(babel: any, options?: BabelPluginOptions): PluginObj;

interface WebpackLoaderOptions {
    parserOptions?: ImageNameParserOptions;
    generateTitle?: boolean;
    generateAlt?: boolean;
    fallbackAlt?: string;
    fallbackTitle?: string;
}
declare function imageAltGeneratorLoader(this: any, source: string, sourceMap?: any): string;

interface VitePluginOptions {
    parserOptions?: ImageNameParserOptions;
    include?: string[];
    exclude?: string[];
    generateTitle?: boolean;
    generateAlt?: boolean;
    fallbackAlt?: string;
    fallbackTitle?: string;
}
declare function imageAltGeneratorVitePlugin(options?: VitePluginOptions): Plugin;

declare const imageAltTitleGenerator: {
    ImageNameParser: typeof ImageNameParser;
    defaultParser: ImageNameParser;
    babelPlugin: typeof imageAltGeneratorPlugin;
    webpackLoader: typeof imageAltGeneratorLoader;
    vitePlugin: typeof imageAltGeneratorVitePlugin;
};
//# sourceMappingURL=index.d.ts.map

export { BabelPluginOptions, ImageNameParser, ImageNameParserOptions, VitePluginOptions, WebpackLoaderOptions, imageAltGeneratorPlugin as babelPlugin, imageAltTitleGenerator as default, defaultParser, imageAltGeneratorVitePlugin as imageAltGenerator, imageAltGeneratorVitePlugin as vitePlugin, imageAltGeneratorLoader as webpackLoader };
