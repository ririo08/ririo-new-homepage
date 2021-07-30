<template>
<div>
<div>
    <Hukidasi/>
    <div class="accessCounterBox">
    <div class="accessCounterTarget">あなたは{{ counter }}人目の訪問者です。</div>
    </div>
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
    // this.counter = Math.floor(Math.random() * 100000000) + 1;
    // console.log('1')
  },
  mounted: function(){
    this.counter = Math.floor(Math.random() * 100000000) + 1;
  //   console.log('1')
  },
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

.accessCounterBox {
  text-align: center;
  position: relative;
  font-size: 14px;
}
</style>