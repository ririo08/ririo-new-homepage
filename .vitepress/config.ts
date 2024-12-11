import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "リリオのホームページ",
  description: "ririo08's homepage",

  srcDir: './docs',
  base: '/homepage/',

  rewrites: {
    'docs/pcSpec.md': 'docs/pc-spec.md',
  },

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'リリオについて', link: '/about' },
        ]
      },
      {
        text: 'PCと周辺機器のページ',
        items: [
          { text: 'PC & Gear DETAIL', link: '/pc-spec' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@RirioCH' },
      { icon: 'github', link: 'https://github.com/ririo08' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/ririo.dev' },
      { icon: 'x', link: 'https://x.com/ririo08' },
    ]
  }
})
