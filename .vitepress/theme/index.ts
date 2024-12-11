import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LatestVideo from '../../components/LatestVideo.vue'
import CustomLayout from './CustomLayout.vue'
import './tailwind.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    // register your custom global components
    app.component('LatestVideo', LatestVideo)

    router.onBeforeRouteChange = async (to) => {
      if (to === '/homepage/pcSpec.html') {
        await router.go('/homepage/pc-spec')
        return false; // 元の遷移をキャンセル
      }
    };
  },
  Layout: CustomLayout
} satisfies Theme