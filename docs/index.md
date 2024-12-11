---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "リリオのホームページ"
  tagline: vitepress版！
  actions:
    - theme: brand
      text: YouTube
      link: https://www.youtube.com/@RirioCH
    - theme: alt
      text: リリオについて
      link: /about
---

<script setup>
  import {useNow, useDateFormat} from '@vueuse/core'
  const now = useNow()
  const date = useDateFormat(now, 'YYYY/MM/DD HH:mm:ss')
</script>

{{ date }}