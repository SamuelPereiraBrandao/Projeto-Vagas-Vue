<template>
  <div>
    
    <TopoSite @navegar="componente = $event" />
   
    <ConteudoSite v-if="visibilidade" :conteudo="componente"></ConteudoSite>
  </div>
</template>

<script>
import ConteudoSite from "@/components/layouts/ConteudoSite.vue"; // @ = src
import TopoSite from "@/components/layouts/TopoSite.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: 'Home'
  }),

  components: {
    TopoSite,
    ConteudoSite,

  },
};
</script>

<style scoped>
</style>
