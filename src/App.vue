<template>
<div>
  <TopoSite/>
  <ConteudoSite></ConteudoSite>
  
</div>
</template>

<script>
import ConteudoSite from './components/layouts/ConteudoSite.vue'
import TopoSite from './components/layouts/TopoSite.vue'


export default {
  name: 'App',
  components: {
    TopoSite,
    ConteudoSite,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
