<template>
  <div>
    <div class="globalBox">
      <h2 class="globalBox-title">動画リスト</h2>
      <p>
        ここでは今までにプレイしたゲームの映像リンク等を貼っていきます。<br />
        実況は「実況動画」リンクから（リリオが編集して見やすくしたやつです。）<br />
        配信は「配信アーカイブ」リンクから！<br />
        現在<span class="movielist-jstarget" id="movielist-jstarget"></span>シリーズを配信中！
      </p>
    </div>
    <div class="movielist-flex">
      <div class="movielist-entrylist">
        <p>0-1 A-Z あ-ん シリーズ順で並べています。</p>

        <dt class="listTable-title" style="color: rgb(185, 89, 9)">
          一緒に見ようシリーズ
        </dt>
        <dd class="listTable-links youlink">
          <a href="https://www.youtube.com/playlist?list=PL_KrJ2Q-UZsG_1EC0W9k71ubsCSemBZZY"
            target="piframe">YouTube</a>
        </dd>
        <div v-for="item in this.lockerStatus" :key="item.Title">
          <dt class="listTable-title">{{ item.Title }}</dt>
          <dd class="listTable-links youlink">
            <a :href="item.StreamLink" target="_blank" v-if="item.StreamLink">配信アーカイブ</a>
            <a :href="item.MovieLink" target="_blank" v-if="item.MovieLink">実況動画</a>
          </dd>
        </div>
        <!-- <dt class="listTable-title">Apex Legends</dt>
        <dd class="listTable-links youlink">
          <a href="https://www.youtube.com/playlist?list=PLwQLZEoAUfGjVTUcZNDgEg_qB_J6Crixt" target="_blank">配信アーカイブ</a>
          <a href="https://www.youtube.com/watch?v=iz-05-jqLTI&list=PL_KrJ2Q-UZsG26RZn72FEApmTbcbnuV9P"
            target="_blank">実況動画</a>
        </dd> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios.get('https://sheets.googleapis.com/v4/spreadsheets/1ZxI-QHaLyLTlERtTloxvnTFXO02onsMriR_UVSam6yE/values/list?key=AIzaSyAe5CX3okoCZT00uxT2ckdRv6oUJ3YNj9o')
    .then(res => {
      const jsonData = res.data.values
      const key1 = jsonData[0][0]
      const key2 = jsonData[0][1]
      const key3 = jsonData[0][2]

      let movieList = []
      for (let i = 1; i < jsonData.length; i++) {
        let obj = {}
        obj[key1] = jsonData[i][0]
        obj[key2] = jsonData[i][1]
        obj[key3] = jsonData[i][2]
        movieList.push(obj)
      }

      return { lockerStatus: movieList }
    })
  },
  data() {
  },
  computed: {

  },
  mounted() {
    this.count()
    // console.log("mounted",this.lockerStatus)
  },
  methods: {
    count() {
      if (process.client) {
        document.getElementById('movielist-jstarget').innerHTML = document.querySelectorAll('.listTable-title').length
      }
    },
  },
};
</script>

<style lang="scss">
$themeColor: orange;
.movielistContainer {
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: 1000px;
}

.grayscreen {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 8;
  display: none;
  &-active {
    display: block;
  }
}

.movielist {
  &-entrylist {
    font-weight: bold;
    width: 100%;
    padding-left: 5px;

    p {
      font-weight: normal;
    }
  }

  &-jstarget {
    font-weight: bold;
    color: red;
  }
}

.listTable {
  &-links {
    display: block;
    padding-left: 20px;
    margin-bottom: 1.5rem;
    a {
      margin-left: 0.5rem;
    }
  }
}

.youlink a:hover {
  color: #ff0000;
}
</style>