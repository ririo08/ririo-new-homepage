<template>
  <div>
    <Header />
    <Nuxt />
    <footer>
      <small>@リリオ 2019</small>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
$themeColor: orange;
footer {
  text-align: center;
}
div {
  max-width: 1000px;
  margin: auto;
}
.globalBox {
  margin-top: 20px;
  &-title {
    text-align: center;
    padding-bottom: 8px;
    border-bottom: 3px solid $themeColor;
  }
}
</style>