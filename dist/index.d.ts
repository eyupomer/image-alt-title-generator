import * as React from 'react';
import React__default from 'react';
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

interface UseImageAltOptions {
    parserOptions?: ImageNameParserOptions;
    customParser?: ImageNameParser;
    fallbackAlt?: string;
    fallbackTitle?: string;
    generateTitle?: boolean;
    generateAlt?: boolean;
}
interface UseImageAltReturn {
    alt: string;
    title: string;
    generatedText: string;
}
declare const useImageAlt: (src: string, options?: UseImageAltOptions) => UseImageAltReturn;

interface SmartImageProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    parserOptions?: ImageNameParserOptions;
    customParser?: ImageNameParser;
    fallbackAlt?: string;
    fallbackTitle?: string;
    generateTitle?: boolean;
    generateAlt?: boolean;
}
declare const SmartImage: React__default.ForwardRefExoticComponent<SmartImageProps & React__default.RefAttributes<HTMLImageElement>>;

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

declare const webImageAltGenerator: {
    SmartImage: React.ForwardRefExoticComponent<SmartImageProps & React.RefAttributes<HTMLImageElement>>;
    useImageAlt: (src: string, options?: UseImageAltOptions) => UseImageAltReturn;
    ImageNameParser: typeof ImageNameParser;
    defaultParser: ImageNameParser;
    babelPlugin: typeof imageAltGeneratorPlugin;
    webpackLoader: typeof imageAltGeneratorLoader;
    vitePlugin: typeof imageAltGeneratorVitePlugin;
};
//# sourceMappingURL=index.d.ts.map

export { BabelPluginOptions, ImageNameParser, ImageNameParserOptions, SmartImage, SmartImageProps, UseImageAltOptions, UseImageAltReturn, VitePluginOptions, WebpackLoaderOptions, imageAltGeneratorPlugin as babelPlugin, webImageAltGenerator as default, defaultParser, imageAltGeneratorVitePlugin as imageAltGenerator, useImageAlt, imageAltGeneratorVitePlugin as vitePlugin, imageAltGeneratorLoader as webpackLoader };
