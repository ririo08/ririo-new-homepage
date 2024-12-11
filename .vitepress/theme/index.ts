import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LatestVideo from '../../components/LatestVideo.vue'
import CustomLayout from './CustomLayout.vue'
import './tailwind.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('LatestVideo', LatestVideo)
  },
  Layout: CustomLayout
} satisfies Theme