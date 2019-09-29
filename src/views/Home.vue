<template>
  <div class="home">
    <h1> Hello </h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created () {
    console.log(this.$router.history.current.query)
  }
}
</script>
