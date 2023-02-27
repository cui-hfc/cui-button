import { defineHfcPackConfig } from 'hfcpack';
import postcssNesting from 'postcss-nesting'

export default defineHfcPackConfig({
  entry: './src/index.ts',
  plugins: [],
  css: {
    postcss: {
      // you may need vscode PostCSS Language Support extension
      plugins: [postcssNesting()]
    }
  }
});
