import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from 'vite';

const CustomHmr = () => {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.svg')) {
        console.log('reloading for mermaid file change...');

        server.ws.send({
          type: 'full-reload',
          path: '*',
        });
      }
    },
  };
};

export default defineConfig({
  optimizeDeps: {
    include: ['mermaid'],
  },

  plugins: [
    SearchPlugin({
      buttonLabel: 'Search',
      placeholder: 'Search docs',
      encode: false,
      tokenize: 'full',
    }),

    CustomHmr(),
  ],
});
