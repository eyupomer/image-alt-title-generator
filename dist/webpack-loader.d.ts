import { ImageNameParserOptions } from './utils/imageNameParser';
export interface WebpackLoaderOptions {
    parserOptions?: ImageNameParserOptions;
    generateTitle?: boolean;
    generateAlt?: boolean;
    fallbackAlt?: string;
    fallbackTitle?: string;
}
export default function imageAltGeneratorLoader(this: any, source: string, sourceMap?: any): string;
//# sourceMappingURL=webpack-loader.d.ts.map