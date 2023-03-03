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
        <span v-for="item in this.lockerStatus" :key="item.Id">
          <li class="historyList-li historyRed" v-if="item.IsYear">
            <span class="historyList-li_date">
              {{ item.Date }}
            </span>
            {{ item.Detail }}
          </li>
          <li class="historyList-li" v-else>
            <span class="historyList-li_date">{{ item.Date }}</span>
            {{ item.Detail }}
          </li>
        </span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios
      .get(
        'https://sheets.googleapis.com/v4/spreadsheets/1ZxI-QHaLyLTlERtTloxvnTFXO02onsMriR_UVSam6yE/values/history-index?key=AIzaSyAe5CX3okoCZT00uxT2ckdRv6oUJ3YNj9o'
      )
      .then((res) => {
        const jsonData = res.data.values
        const key1 = jsonData[0][0]
        const key2 = jsonData[0][1]
        const key3 = jsonData[0][2]
        const key4 = jsonData[0][3]
        const key5 = jsonData[0][4]

        let historyList = []
        for (let i = 1; i < jsonData.length; i++) {
          let obj = {}
          obj[key1] = jsonData[i][0]
          obj[key2] = jsonData[i][1]
          obj[key3] = jsonData[i][2]
          obj[key4] = jsonData[i][3]
          obj[key5] = jsonData[i][4]
          historyList.push(obj)
        }
        historyList.reverse()
        return { lockerStatus: historyList }
      })
  },
  data() {
    return {
      date: 0,
      year: 0,
    }
  },
  mounted: function () {
    let a = Date.parse('2013/02/03')
    let b = new Date()
    let c = (b - a) / 1000 / 60 / 60 / 24
    let d = Math.round(c / 365) * 1 + 1
    c = Math.floor(c)
    this.date = c
    this.year = d
  },
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
  margin-top: 3rem;
  color: #ec3d3d;
}

@media screen and (max-width: 768px) {
  .history-details_p {
    margin-left: 5px;
  }

  .historyList-ul {
    padding-left: 0.5rem;
  }

  .historyList-li {
    margin-bottom: 30px;
  }

  .historyList-li_date {
    display: block;
  }
}
</style>
