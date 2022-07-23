<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <TopoSite @navegar="componente = $event" />
    <ConteudoSite v-if="visibilidade" :conteudo="componente"></ConteudoSite>
  </div>
</template>

<script>
import ConteudoSite from "@/components/layouts/ConteudoSite.vue"; // @ = src
import TopoSite from "@/components/layouts/TopoSite.vue";
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: 'Home'
  }),

  components: {
    TopoSite,
    ConteudoSite,
    VagasFavoritas
  },
};
</script>

<style scoped>
</style>
