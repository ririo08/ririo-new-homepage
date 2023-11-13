<template>
  <div class="wrapper">
    <Header />
    <slot />
    <footer>
      <small>@リリオ 2019</small>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$themeColor: orange;

.wrapper {
  width: 100%;
}

footer {
  text-align: center;
}

small {
  display: block;
  padding-top: 100px;
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

@media (prefers-color-scheme: dark) {
  body {
    background-color: #181818;
    color: #f0f0f0;
  }

  h1,
  h2 {
    color: #f0f0f0;
  }

  a {
    color: #3b99ff;
  }

  .zisaku-img {
    color: #000;
  }

  .gnav-button {
    background-color: #202020 !important;
  }

  .toptitle a {
    color: #f0f0f0 !important;
  }

  .playtitle a {
    color: #3b99ff !important;
  }

  // History
  .historyRed {
    color: #d13434;
  }

  // Amazlet
  .amazlet-name a,
  .amazlet-link a {
    color: #cc8d33;
  }
}
</style>
