<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga
          :titulo="vaga.titulo"
          :descricao-vaga="vaga.descricao"
          :salario="vaga.salario"
          :modalidade="vaga.modalidade"
          :tipo="vaga.tipo"
          :publicacao="vaga.publicacao"
        />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></indicador>
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
    vagas: [
      {
        titulo: "Analista Programador PHP Pleno",
        descricao:
          "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
        salario: 6000,
        modalidade: "Home Office",
        tipo: "PJ",
        publicacao: "20/07/2022",
      }, 
      {
        titulo: "Programador JavaScript Vue",
        descricao:
          "Profissional com conhecimentos avançados em JavaScript e Vue.",
        salario: 5000,
        modalidade: "Presencial",
        tipo: "CLT",
        publicacao: "21/07/2022",
      },
      {
        titulo: "Programador JavaScript Vue Pleno",
        descricao:
          "Profissional com conhecimentos avançados em JavaScript e Vue.",
        salario: 5500,
        modalidade: "Home Office",
        tipo: "CLT",
        publicacao: "22/07/2022",
      },
      {
        titulo: "Analista de Banco de Dados Sênior",
        descricao:
          "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
        salario: 9000,
        modalidade: "Presencial",
        tipo: "PJ",
        publicacao: "23/07/2022",
      },
      {
        titulo: "Programador Web Júnior",
        descricao:
          "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
        salario: 3000,
        modalidade: "Presencial",
        tipo: "CLT",
        publicacao: "24/07/2022",
      },
    ],
  }),
  methods: {
    getUsuariosOnline() {
      //pessoas online
      this.usuariosOnline = Math.floor(Math.random() * 35); //entre 0 e 15
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 4500); //a cada 1seg
  },
};
</script>
<style scoped>
</style>