<template>
  <div>
    <div class="globalBox">
      <h1 class="globalBox-title">YouTube Live history</h1>
      <p class="history-details_p">
        活動の記録です。現在{{ date }}日目（{{ year }}年目）！<br>
				（）付きの配信時間はYouTubeではなくTwitchでの配信を含めた配信時間となります。
      </p>
    </div>
    <div class="historyList">
      <ul class="historyList-ul">
          <!-- <li class="historyList-li historyRed"><span class="historyList-li_date">2020</span>再生回数：6,758回 投稿数：135本</li> -->
          <li class="historyList-li"><span class="historyList-li_date">2021/10/31</span>総再生数10,000回突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2021/10/02</span>累計配信500時間突破</li>
          <li class="historyList-li"><span class="historyList-li_date">2021/06/12</span>累計配信100時間突破</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li historyRed"><span class="historyList-li_date">2020</span>（配信時間：1,404時間） 視聴回数：627回</li>
          <li class="historyList-li"><span class="historyList-li_date">2020/07/22</span>チャンネル登録者数10人突破</li>
      </ul>
      <ul class="historyList-ul">
          <li class="historyList-li historyRed"><span class="historyList-li_date">2019</span>（配信時間：1,088時間） 視聴回数：540回</li>
          <li class="historyList-li"><span class="historyList-li_date">2019/09/09</span>配信局で配信開始</li>
      </ul>
			<ul class="historyList-ul">
          <li class="historyList-li historyRed"><span class="historyList-li_date">2018</span>（配信時間：962時間） 視聴回数：1,237回</li>
          <li class="historyList-li"><span class="historyList-li_date">2018/09/21</span>総再生回数1,000回再生突破</li>
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
    let a = Date.parse("2019/09/09")
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
</style>