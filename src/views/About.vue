<template>
  <div class="about">
    <h1>  About Parametro passado: {{$route.params.option}} </h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  created () {
    console.log(this.$router.history.current.query)
  }
}
</script>
