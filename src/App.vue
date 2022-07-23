<template>
  <div>
    <h1>componente app</h1>
    <button @click="desmontarcomponente()">
      Desmontar o componente conteudo
    </button>
    <TopoSite @nomeDoEventoQueSeraCapturadoNoComponentePai="$event('Texto 1', 124)" />
    <ConteudoSite v-if="visibilidade"></ConteudoSite>
  </div>
</template>

<script>
import ConteudoSite from "@/components/layouts/ConteudoSite.vue"; // @ = src
import TopoSite from "@/components/layouts/TopoSite.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
  }),
  methods: {
    desmontarcomponente() {
      this.visibilidade = false;
    },
    acao(pai){
      console.log(pai)
    }
  },
  
  components: {
    TopoSite,
    ConteudoSite,
  },
};
</script>

<style scoped>
</style>
