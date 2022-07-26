<template>
  <div>
    <TopoSite @navegar="componente = $event" />
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <div :class="estiloAlerta" role="alert">
       {{alerta.titulo}} <br>
        {{alerta.descricao}}
      </div>
    </alerta>
    <ConteudoSite v-if="visibilidade" :conteudo="componente"></ConteudoSite>
    <rodape></rodape>
  </div>
</template>

<script>
import ConteudoSite from "@/components/layouts/ConteudoSite.vue"; // @ = src
import TopoSite from "@/components/layouts/TopoSite.vue";
import Alerta from "@/components/comuns/Alerta.vue"
import Rodape from "@/components/comuns/Rodape.vue"
export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false,
    alerta: {
      titulo:'',
      descricao:'',
      tipo:''
    }
  }),

  components: {
    TopoSite,
    ConteudoSite,
    Alerta,
    Rodape

  },
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      console.log(this.alerta)
      this.exibirAlerta = true;
      setTimeout(() => this.exibirAlerta = false, 4000) //some em 4seg
    })
  }
};
</script>

<style scoped>
</style>
