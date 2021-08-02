<template>
  <div>
    <div class="globalBox">
      <h1 class="globalBox-title">HISTORY</h1>
      <p class="history-details_p">
        活動の記録です。現在{{ date }}日目（{{ year }}年目）！
      </p>
      <p class="history-details_p">
        YouTube Liveの記録はこちら →
        <NuxtLink to="/history/live">YouTube Live HISTORY</NuxtLink>
      </p>
      <p class="history-details_p">
        Twitchの過去の記録はこちら →
        <NuxtLink to="/history/twitch">Twitch Ririo08's HISTORY</NuxtLink>
      </p>
    </div>
    <div class="historyList">
      <ul class="historyList-ul">
          <!-- <li class="historyList-li historyRed"><span class="historyList-li_date">2020</span>再生回数：6,758回 投稿数：135本</li> -->
          <li class="historyList-li"><span class="historyList-li_date">2021/05/20</span>メインチャンネル登録者数100人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2021/05/03</span>総再生回数50,000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2021/04/09</span>動画投稿数500本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2021/03/21</span><a href="https://youtu.be/fbCT2s9gQ9o" target="_blank" rel="noopener noreferrer">1つの動画</a> が1,0000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2021/02/03</span>活動開始8周年！</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li historyRed"><span class="historyList-li_date">2020</span>再生回数：6,758回 投稿数：135本</li>
          <li class="historyList-li"><span class="historyList-li_date">2020/10/26</span>動画投稿数400本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2020/05/16</span>総再生回数10,000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2020/03/02</span>動画投稿数300本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2020/02/03</span>活動開始7周年！</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li historyRed"><span class="historyList-li_date">2019</span>再生回数：6,381回 投稿数：79本</li>
          <li class="historyList-li"><span class="historyList-li_date">2019/09/30</span>1つの動画が1,000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2019/09/07</span>動画投稿数200本突破</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li historyRed"><span class="historyList-li_date">2018</span>再生回数：2,160回 投稿数：100本</li>
          <li class="historyList-li"><span class="historyList-li_date">2018/09/12</span>動画投稿数100本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2018/03/02</span>新チャンネル「リリオ」「リリオの日常」「リリオの配信局」設立</li>
          <li class="historyList-li"><span class="historyList-li_date">2018/02/28</span>メインチャンネル「Ririo.CH」崩壊</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li"><span class="historyList-li_date">2017/08/13</span>メインチャンネル「Ririo.CH」開設5周年</li>
          <li class="historyList-li"><span class="historyList-li_date">2017/03/02</span>総再生回数が600,000回を突破</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li"><span class="historyList-li_date">2016/12/06</span>動画投稿数400本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2016/09/22</span>チャンネル登録者数1500人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2016/08/13</span>メインチャンネル「Ririo.CH」開設4周年</li>
          <li class="historyList-li"><span class="historyList-li_date">2016/04/22</span>総再生回数が500,000回を突破</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li"><span class="historyList-li_date">2015/12/09</span>動画投稿数300本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2015/09/21</span>総高評価100,0回突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2015/08/13</span>メインチャンネル「Ririo.CH」開設3周年</li>
          <li class="historyList-li"><span class="historyList-li_date">2015/08/03</span>総再生時間2,000,000分突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2015/07/05</span>総再生回数が400,000回を突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2015/04/01</span>動画投稿数200本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2015/01/26</span>総再生回数300,000回突破</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li"><span class="historyList-li_date">2014/12/20</span>チャンネル登録者数1000人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/12/07</span>5本の動画が10,000再生を突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/10/14</span>総再生時間1,000,000分突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/10/12</span>総再生回数200,000回突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/09/22</span>チャンネル登録者数800人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/08/13</span>メインチャンネル「Ririo.CH」開設2周年</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/06/28</span>チャンネル登録者数500人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/06/28</span>新チャンネル「Ririo.CH Mini」を開設</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/06/24</span>総再生回数100,000回突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/06/19</span>動画投稿数100本突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/05/05</span>チャンネル登録者数400人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/05/02</span>総再生回数70000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/04/24</span>新チャンネル「Ririo.CH with Music」を開設</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/04/16</span>チャンネル登録者数300人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/04/13</span>1つの動画が10000回再生を突破（Minecraft）</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/04/12</span>総再生回数50000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/03/19</span>チャンネル登録者数100人突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/03/04</span>初ニコニコ生放送</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/02/05</span>総再生回数10000回再生突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2014/01/28</span>Twitter チャンネル用アカウント開設</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li"><span class="historyList-li_date">2013/12/28</span>初肉声実況を投稿（Minecraft）</li>
          <li class="historyList-li"><span class="historyList-li_date">2013/08/13</span>メインチャンネル「Ririo.CH」開設1周年</li>
          <li class="historyList-li"><span class="historyList-li_date">2013/06/17</span>初ゆっくり実況を投稿（Minecraft）</li>
          <li class="historyList-li"><span class="historyList-li_date">2013/04/20</span>初ゲーム動画投稿（Minecraft）</li>
          <li class="historyList-li"><span class="historyList-li_date">2013/02/03</span>初動画投稿</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li"><span class="historyList-li_date">2012/08/13</span>メインチャンネル「Ririo.CH」開設</li>
          <li class="historyList-li"><span class="historyList-li_date">2012/01/07</span>Twitterアカウント開設</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      date:0,
      year:0,
    }
  },
  mounted: function(){
    let a = Date.parse("2013/02/03")
    let b = new Date()
    let c = (b - a)/1000/60/60/24
    let d = Math.round(c / 365) * 1 + 1
    c = Math.floor(c)
    this.date = c
    this.year = d
  }
}
</script>

<style lang="scss">

.historyList {
  margin-top: 4rem;
  &-ul {
    list-style: none;
    margin-bottom: 2rem;
  }
  &-li {
    font-weight: bold;
    margin-bottom: 0.8rem;
    &_date {
      margin-right: 1rem;
    }
  }
}

.historyRed {
  color: #a80000;
}

@media screen and (max-width: 768px) {
  .historyList-li {
    margin-bottom: 30px;
  }
  .historyList-li_date {
    display: block;
  }
}
</style>