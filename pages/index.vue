<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Calcury</h1>
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
            placeholder="一人目の名前を入力してください"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-info"
            type="text"
            placeholder="二人目の名前を入力してください"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="金額を入力してください"
          />
        </div>
      </div>
    </div>
    <div id="num-input-container">
      <div class="p-title-container">
        <p>割り勘する金額を入れてください</p>
      </div>
      <div class="input-num-box">
        <input
          class="input is-primary"
          type="text"
          placeholder="三人目の名前を入力してください"
        />
      </div>
    </div>
    <div id="table">
      <div class="p-title-container">
        <p>現在一人当たりの金額は...</p>
      </div>
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
              <p class="title is-4">￥2888</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
        </div>
        <input
          class="input is-primary"
          type="text"
          placeholder="支払った金額を入れてください"
        />
        <input
          class="input is-primary"
          type="text"
          placeholder="個別の金額を入力してください"
        />
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://picsum.photos/200/300?grayscale"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">￥2888</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
        </div>
        <input
          class="input is-primary"
          type="text"
          placeholder="支払った金額を入力してください"
        />
        <input
          class="input is-primary"
          type="text"
          placeholder="個別の金額を入れてください"
        />
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">￥2888</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
        </div>
        <input
          class="input is-primary"
          type="text"
          placeholder="支払った金額を入れてください"
        />
        <input
          class="input is-primary"
          type="text"
          placeholder="個別の金額を入れてください"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 100vh;
  text-align: center;
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
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 35px;
}

.links {
  padding-top: 15px;
  display: none;
}

.p-title-container {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
