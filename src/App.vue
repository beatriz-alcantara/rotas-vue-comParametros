<template>
  <div id="app">
    <div id="nav">
      <input type="text" v-model="param" />
      <button @click="add()">Add word</button>
      <div class="v-mt-md">Array Words: {{arrayWords}}</div>
      <div>
        <button @click="changePage('home')">Home</button>
        <button @click="changePage('about')">About</button>
        <button @click="changePage('help')">Help</button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      param: '',
      arrayWords: []
    }
  },
  methods: {
    changePage (routeName) {
      this.$router.push({ name: routeName, params: { arrayWords: this.arrayWords } })
      this.arrayWords = []
    },
    add () {
      this.arrayWords.push(this.param)
      this.param = ''
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.v-mt-md {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
