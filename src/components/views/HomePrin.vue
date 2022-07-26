<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <!--
    <lista-vagas>
      <template v-slot:titulo="slotProps">
        {{ slotProps.dadosTitulo.titulo }}
      </template>
      <template v-slot:default="slotProps">
        {{ slotProps.vagas }}
      </template>
      <template v-slot:rodape="slotProps">
        {{ slotProps.dadosRodape.titulo }}
      </template>
    </lista-vagas>
-->
    <lista-vagas></lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
      </div>
      <div class="col-4">
        <indicador titulo="Profissionais cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador>
      </div>
      <div class="col-4">
        <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador>
      </div>
    </div>
  </div>
</template>
<script>
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import Indicador from "@/components/comuns/Indicador.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";

export default {
  name: "HomePrin",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas
  },
  data: () => ({
    usuariosOnline: 0,

  }),
  methods: {
    getUsuariosOnline() {
      //pessoas online
      this.usuariosOnline = Math.floor(Math.random() * 35); //entre 0 e 15
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 4500); //a cada 4,5 seg
  },


};
</script>
<style >
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #212529;
}

::-webkit-scrollbar-thumb {
  background-color: #495057;

  border-radius: 2px;
}
</style>