import { PluginObj } from '@babel/core';
import { ImageNameParserOptions } from './utils/imageNameParser';
export interface BabelPluginOptions {
    parserOptions?: ImageNameParserOptions;
    include?: string[];
    exclude?: string[];
    generateTitle?: boolean;
    generateAlt?: boolean;
    fallbackAlt?: string;
    fallbackTitle?: string;
}
export default function imageAltGeneratorPlugin(babel: any, options?: BabelPluginOptions): PluginObj;
//# sourceMappingURL=babel-plugin.d.ts.map