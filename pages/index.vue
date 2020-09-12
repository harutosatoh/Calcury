<template>
  <div class="container">
    <div id="banner">
      <p>このページをホーム画面に追加することで、通常のアプリとして使用できるようになります！</p>
    </div>
    <div class="header">
      <img src="../static/icon.png" alt="">
      <h1 class="title">Calcury</h1>
      <div class='desc'>
        <p>Calcuryは3人グループでのちょっとしたお金の管理を助けるアプリです。合計金額やそれぞれが払った額を記録しておき、あとでしっかり確認できるようにしましょう！</p>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <div id="input-container">
      <div class="p-title-container">
        <p>参加者の名前を入れましょう</p>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-warning"
            type="text"
            name="name"
            v-model="first"
            placeholder="一人目の名前を入力してください"
          />
        </div>
      </div>
      <button class="button is-success is-rounded" v-bind:disabled="isPush1" @click="insertUser1">追加</button>
      <div class="field">
        <div class="control">
          <input
            class="input is-info"
            type="text"
            name="name"
            v-model="second"
            placeholder="二人目の名前を入力してください"
          />
        </div>
      </div>
      <button class="button is-success is-rounded" v-bind:disabled="isPush2" @click="insertUser2">追加</button>
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            name="name"
            v-model="third"
            placeholder="三人目の名前を入力してください"
          />
        </div>
      </div>
      <button class="button is-success is-rounded" v-bind:disabled="isPush3" @click="insertUser3">追加</button>
    </div>
    <div id="num-input-container">
      <div class="p-title-container">
        <p>割り勘する金額を入れてください</p>
      </div>
      <div class="input-num-box">
        <input
          class="input is-primary"
          type="number"
          name="sum"
          v-model="sum"
          placeholder="金額を入力(半角数字のみ）"
        />
        <input
          class="input is-primary"
          type="text"
          name="content"
          v-model="content"
          placeholder="内容を入力してください"
        />
      </div>
      <button class="button is-primary is-focused" @click="insert">追加</button>
    </div>
    <div id="table">
      <div class="panel is-primary">
        <tr class="panel-block is-active" v-for="(item, index) in payments" :key="index">
          <td class="num">￥{{ item.number }}</td>
          <td class="content">{{ item.content }}</td>
      </tr>
      </div>
      <div class="p-title-container">
        <p class="show-sum">現在の合計:</p>
        <h3 class="sum">￥{{ this.$store.state.currentSum[0].number }}</h3>
        <p class="show-sum">一人あたりの金額（小数点以下切り捨て):</p>
        <h3 class="sum">￥{{ divider(this.$store.state.currentSum[0].number)}}</h3>
      </div>
      <div v-for="(item, index) in users" :key="index">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">{{ item.name }}</p>
              <p>支払済</p>
              <p class="title is-4">￥{{ $store.state.paymentsEach[item.uid].number }}</p>
            </div>
          </div>
        </div>
          <input
            class="input is-primary card-content"
            type="number"
            v-model="paymentseach"
            placeholder="個別に支払った金額を入れてください"
          />
          <button class="button is-primary is-light card-content" @click="insertPayment(item.uid)">支払いを追加</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  namespaced: true,
  data: () => {
    return {
      isPush : false,
    }
  },
  data: () => {
    return {
      content: '',
    }
  },
  computed: {
    ...mapState(['payments']),
    ...mapState(['users']),
    ...mapState(['currentSum']),
    ...mapState(['paymentsEach'])
  },
  methods: {
    insertUser1: function () {
      console.log("called")
      if (this.first !== '') {
        this.$store.commit('insertUser', { name: this.first, uid: 1, payment: '0' }, { root: true })
        console.log(this.first)
        this.isPush1 = true
        this.first = ''
      }
    },
    insertUser2: function () {
      console.log("called")
      if (this.second !== '') {
        this.$store.commit('insertUser', { name: this.second, uid: 2, payment: '0' }, { root: true })
        console.log(this.second)
        this.isPush2 = true
        this.second = ''
      }
    },
    insertUser3: function () {
      console.log("called")
      if (this.third !== '') {
        this.$store.commit('insertUser', { name: this.third, uid: 3, payment: '0' }, { root: true })
        console.log(this.first)
        this.isPush3 = true
        this.third = ''
      }
    },
    insert: function () {
      if (this.content !== '' && this.sum !== null) {
        var currentSum = this.$store.state.currentSum[0].number
        var currentSumNum = parseInt( currentSum, '10')
        var sumNum = parseInt( this.sum, '10')
        console.log( currentSum )
        var totalSum = sumNum + currentSumNum
        this.$store.commit('insert', { number: this.sum, content: this.content }, { root: true })
        this.$store.commit('insertSum', { totalSum: totalSum }, { root: true })
        this.sum= ''
        this.content = ''
      }
    },
    insertPayment: function (uid) {
      this.$store.commit('paymentsEach', { number: this.paymentseach, uid: uid }, { root: true })
      this.paymentseach = ''
      console.log(this.paymentseach)
    },
    divider: function (number) {
      var num = parseInt(number, '10')
      var numDivided = num/3
      var numInt = Math.floor(numDivided)
      return numInt
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  margin-bottom: 100px;
  min-height: 100vh;
  text-align: center;
}

.header {
  padding-left: 30px;
  padding-right: 30px;
}

header p {
  font-size: 15px;
}

#banner {
  height: 45px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #339455;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

img {
  margin-top: 30px;
  width: 150px;
  height: auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 35px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: bold;
  font-size: 2rem;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
  display: none;
}

.card {
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}

input {
  margin-top: 15px;
  margin-bottom: 15px;
}

button {
  margin-top: 15px;
  min-width: 200px;
}

tr {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}

td {
  padding-right: 20px;
  font-weight: bold;
}

.p-title-container {
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.each-payment-form {
  width: 90%;
  margin: 15px auto;
}

.card-content {
  width: 90%;
  margin-bottom: 10px;
}

.panel {
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
}

.sum {
  font-size: 27px;
  font-weight: bold;
}

.show-sum {
  margin-top: 20px;
  font-size: 15px;
  font-weight: normal;
}

#input-container {
  padding-left: 30px;
  padding-right: 30px;
}

#num-input-container {
  padding-left: 30px;
  padding-right: 30px;
}
</style>