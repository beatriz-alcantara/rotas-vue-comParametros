<template>
  <div id="app">
    <div id="nav">
      <input type="text" v-model="param"/>
      <button @click="changePage('', param)">Home</button>
      <button @click="changePage('about', param)">About</button>
      <button @click="changePage('help', param)">Help</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      param: ''
    }
  },
  methods: {
    changePage (routeName, param) {
      this.$router.push({ path: `/${routeName}/${param}` })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
