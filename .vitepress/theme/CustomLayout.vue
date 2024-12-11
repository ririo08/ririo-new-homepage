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