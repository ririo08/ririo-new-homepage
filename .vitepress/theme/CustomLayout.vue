<script setup>
import DefaultTheme from 'vitepress/theme'
import LatestVideo from '../../components/LatestVideo.vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <LatestVideo />
    </template>
  </Layout>
</template>

<style deep>
.image-container {
  display: flex;
}
/* 邪魔なので非表示！ */
.image-bg {
  display: none;
}
</style>