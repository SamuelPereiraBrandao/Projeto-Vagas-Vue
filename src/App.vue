<template>
<div>
  <h1>componente app</h1>
  <TopoSite/>
  <ConteudoSite></ConteudoSite>

  
</div>
</template>

<script>
import ConteudoSite from '@/components/layouts/ConteudoSite.vue' // @ = src
import TopoSite from '@/components/layouts/TopoSite.vue'


export default {
  name: 'App',
  components: {
    TopoSite,
    ConteudoSite,
}
}
</script>

<style scoped>

</style>
