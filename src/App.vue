<template>
<div>
  <h1>componente app</h1>
  <button @click="desmontarcomponente()">Desmontar o componente conteudo</button>
  <TopoSite/>
  <ConteudoSite v-if="visibilidade"></ConteudoSite>

  
</div>
</template>

<script>
import ConteudoSite from '@/components/layouts/ConteudoSite.vue' // @ = src
import TopoSite from '@/components/layouts/TopoSite.vue'


export default {
  name: 'App',
  data: () => ({
    visibilidade : true
  }),
  methods:{
  desmontarcomponente(){
    this.visibilidade = false
  }
  },
  components: {
    TopoSite,
    ConteudoSite,
}
}
</script>

<style scoped>

</style>
