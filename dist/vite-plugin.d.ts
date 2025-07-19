import { Plugin } from 'vite';
import { ImageNameParserOptions } from './utils/imageNameParser';
export interface VitePluginOptions {
    parserOptions?: ImageNameParserOptions;
    include?: string[];
    exclude?: string[];
    generateTitle?: boolean;
    generateAlt?: boolean;
    fallbackAlt?: string;
    fallbackTitle?: string;
}
export default function imageAltGeneratorVitePlugin(options?: VitePluginOptions): Plugin;
//# sourceMappingURL=vite-plugin.d.ts.map