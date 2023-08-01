import DefaultTheme from 'vitepress/theme';
import Mermaid from 'vitepress-plugin-mermaid/Mermaid.vue';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import ImageViewer from 'iv-viewer';
import { FullScreenViewer } from 'iv-viewer';

import './custom.css';
import 'iv-viewer/dist/iv-viewer.css';

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    // register global components
    app.component('Mermaid', Mermaid);
  },

  setup() {
    const route = useRoute();

    const initZoom = () => {
      Array.from(document.querySelectorAll('img[data-zoom-pan]')).forEach(
        (elem) => {
          new ImageViewer(elem, {
            snapView: false,
          });
        },
      );
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,

      () => nextTick(() => initZoom()),
    );
  },
};
