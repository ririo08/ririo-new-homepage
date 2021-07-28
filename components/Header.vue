<template>
<div>
<div>
    <Hukidasi/>
    <div class="accessCounterBox">
    <div class="accessCounterTarget">あなたは{{ counter }}人目の訪問者です。</div>
    </div>
    <GnavButton/>
    <Gnav/>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },
  head () {
    return {
    }
  },
  methods: {
  },
  created: function(){
    this.counter = Math.floor(Math.random() * 100000000) + 1;
    // console.log('1')
  },
  // mounted: function(){
  //   this.counter = Math.floor(Math.random() * 100000000) + 1;
  //   console.log('1')
  // },
}
</script>

<style lang="scss">
$themeColor: orange;

.toptitle {
  text-align: center;
  margin-top: 0;
  padding-top: 60px;
  text-align: center;
  font-weight: bold;

  a {
    text-decoration: none;
    color: black;
  }
}



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

.accessCounterBox {
  text-align: center;
  position: relative;
  font-size: 14px;
}
</style>