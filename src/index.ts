// Components (React-specific)
export { SmartImage } from './components/SmartImage';
export type { SmartImageProps } from './components/SmartImage';

// Hooks (React-specific)
export { useImageAlt } from './hooks/useImageAlt';
export type { UseImageAltOptions, UseImageAltReturn } from './hooks/useImageAlt';

// Utils (Framework-agnostic)
export { ImageNameParser, defaultParser } from './utils/imageNameParser';
export type { ImageNameParserOptions } from './utils/imageNameParser';

// Build-time plugins (Framework-agnostic)
export { default as babelPlugin } from './babel-plugin';
export type { BabelPluginOptions } from './babel-plugin';

export { default as webpackLoader } from './webpack-loader';
export type { WebpackLoaderOptions } from './webpack-loader';

export { default as vitePlugin } from './vite-plugin';
export type { VitePluginOptions } from './vite-plugin';

// Import the actual modules for default export
import { SmartImage } from './components/SmartImage';
import { useImageAlt } from './hooks/useImageAlt';
import { ImageNameParser, defaultParser } from './utils/imageNameParser';
import babelPlugin from './babel-plugin';
import webpackLoader from './webpack-loader';
import vitePlugin from './vite-plugin';

// Default exports - this allows both named and default imports
const webImageAltGenerator = {
  SmartImage,
  useImageAlt,
  ImageNameParser,
  defaultParser,
  babelPlugin,
  webpackLoader,
  vitePlugin,
};

export default webImageAltGenerator;

// Also export the main plugin as the default for easier usage
export { default as imageAltGenerator } from './vite-plugin'; 