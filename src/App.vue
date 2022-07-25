<template>
  <div>
    <TopoSite @navegar="componente = $event" />
    <alerta v-if="exibirAlerta">
    <div class="alert alert-success" role="alert">
        Sua vaga foi publicada com sucesso! <br>
        E já está na página principal
    </div>
    </alerta>
    <ConteudoSite v-if="visibilidade" :conteudo="componente"></ConteudoSite>
  </div>
</template>

<script>
import ConteudoSite from "@/components/layouts/ConteudoSite.vue"; // @ = src
import TopoSite from "@/components/layouts/TopoSite.vue";
import Alerta from "@/components/comuns/Alerta.vue"
export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false
  }),

  components: {
    TopoSite,
    ConteudoSite,
    Alerta

  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.exibirAlerta = 
      setTimeout(() => this.exibirAlerta = false, 4000) //some em 4seg
      console.log('Apresentar a mensagem de alerta customizada')
    })
  }
};
</script>

<style scoped>
</style>
