<template>
<div>
  <div class="zisaku">
    <div class="zisaku-img">自作</div>
  </div>
  <h1 class="toptitle"><a href="https://ririo08.github.io/ririo-Home-Page/">リリオのホームページ</a></h1>
</div>
</template>

<style lang="scss">
.zisaku {
  margin: auto;
  max-width: 500px;
  position: relative;
  z-index: 5;
  &-img {
    display: block;
    width: 76px;
    height: 56px;
    background-image: url("~assets/img/hukidasi.png");
    text-align: center;
    line-height: 2.7;
    position: absolute;
    top: 5px;
    left: 165px;
    font-size: 20px;
  }
}
</style>