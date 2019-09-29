// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'MyPlugin',
  install (Vue, options) {
    Vue.mixin({
      mounted () {
        console.log('Componente Montado')
      }
    })
  }
}
