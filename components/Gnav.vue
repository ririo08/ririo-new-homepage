<template>
  <div>
    <div class="gnav-button" :class="{ 'gnav-button_on': isActive }">
      <a id="menuButton" class="gnav-button_link" @click="toggleMenu">
        <svg class="gnav-button_image" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v"
          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
          <path fill="orange"
            d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z">
          </path>
        </svg>
      </a>
    </div>
    <nav class="gnav">
      <ul class="gnav-ul" :class="{ 'gnav-ul_on': isActive }">
        <li class="gnav-ul_title">Links</li>
        <li class="gnav-ul_li" @click="hideMenu">
          <NuxtLink to="/profile">リリオのプロフィール</NuxtLink>
        </li>
        <li class="gnav-ul_li" @click="hideMenu">
          <NuxtLink to="/pcSpec">PCと周辺機器のページ</NuxtLink>
        </li>
        <li class="gnav-ul_li" @click="hideMenu">
          <NuxtLink to="/movielist">動画リスト</NuxtLink>
        </li>
        <li class="gnav-ul_li" @click="hideMenu">
          <NuxtLink to="/history">活動記録</NuxtLink>
        </li>
        <li class="gnav-ul_li" @click="hideMenu">
          <a href="https://www.youtube.com/RirioTV/" target="_blank">YouTube チャンネル</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
      console.log("click")
    },
    hideMenu() {
      if (window.innerWidth <= 1700) {
        this.isActive = false
      }
    }
  },
  mounted() {
    if (window.innerWidth >= 1700) {
      this.isActive = true
    }
  }
}
</script>

<style lang="scss">
$themeColor: orange;

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.gnav {
  position: fixed;
  z-index: 10;

  &-button {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    border-right: solid 1px $themeColor;
    box-shadow: 4px 4px 10px -5px black;
    transition: all 300ms 0s ease;

    &_link {
      display: block;
      width: 40px;
      height: 100%;
      color: $themeColor;
      cursor: pointer;
      border-right: solid 1px $themeColor;

      &:hover {
        color: $themeColor;
      }
    }

    &_image {
      display: block;
      margin: auto;
      padding-top: 30px;
      width: 15px;
    }

    &_on {
      width: 350px;
    }
  }

  &-ul {
    display: none;
    position: fixed;
    top: 50px;
    left: 50px;
    list-style: none;
    padding-left: 0;
    width: 300px;
    padding-right: 10px;

    &_on {
      display: block;
      animation: show 0.5s linear 0s;
    }

    &_title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }

    &_li {
      padding-top: 20px;
      border-bottom: 2px solid $themeColor;
    }
  }
}

@media screen and (max-width: 1099px) {
  .gnav-button {
    height: 120px;
    border-top: solid 1px orange;
  }

  .gnav-button_image {
    padding-top: 40px;
  }

  .gnav-button_on {
    width: 350px;
    height: 100%;
  }
}
</style>