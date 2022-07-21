<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{titulo}}</div>
    <div class="card-body">
      <p>{{descricaoVaga}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: R$ {{salario}},00 | Modalidade: {{modalidade}} | Tipo {{tipo}} | Publicação:
        {{publicacao}}</small
      >
    </div>
  </div>
</template>
<script>

export default {
  name: "PagVaga",
  //props: ["titulo", "descricaoVaga", "salario", "modalidade", "tipo", "publicacao"],
  props:{
    titulo: String,
    descricaoVaga: String,
    salario: Number,
    modalidade: String,
    tipo: String,
    publicacao: String,

  },
  created(){
    console.log('titulo '+typeof this.titulo)
    console.log('descricao '+typeof this.descricaoVaga)
    console.log('salario '+typeof this.salario)
    console.log('modalidade '+typeof this.modalidade)
    console.log('tipo '+typeof this.tipo)
    console.log('publicacao '+typeof this.publicacao)
  }
};
</script>