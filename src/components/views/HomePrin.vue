<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga" />
      </div>
    </div>

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
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "HomePrin",
  components: {
    PesquisarVaga,
    Indicador,
    Vaga,
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: [],
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
  //mounted / activated para ativar as informações
  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
  },
};
</script>
<style scoped>
</style>