<template>
  <div>
    <div>
      <h1>{{$route.name}}</h1>
    </div>
    <div>
      <h3>{{arrayWords}}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      arrayWords: []
    }
  },
  created () {
    this.arrayWords = this.$route.params.arrayWords
  }
}
</script>
