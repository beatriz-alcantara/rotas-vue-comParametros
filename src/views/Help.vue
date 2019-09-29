<template>
  <div>
    <h1> Help parametro passado: {{$route.params.topic}} </h1>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$router.history.current.query)
  }
}
</script>
