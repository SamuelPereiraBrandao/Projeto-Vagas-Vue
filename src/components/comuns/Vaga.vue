<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricaoVaga }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: R$ {{ salario }},00 | Modalidade: {{ getModalidade }} | Tipo
        {{ getTipo }} | Publicação: {{ getPublicacao }}</small
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "PagVaga",
  //props: ["titulo", "descricaoVaga", "salario", "modalidade", "tipo", "publicacao"],
  props: {
    titulo: {
      type: String,
      required: true,
      validator(p) {
        //console.log("Prop: ", p, p.length);
        if (p.length < 6) {
          return false; //se estiver inválido
        } else return true; //se estiver válido
      },
    },
    descricaoVaga: {
      type: String,
      default: "O contratante não adicionou uma descrição para essa vaga",
    },
    salario: {
      type: [Number, String],
      required: true,
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
      required: true,
    },
  },
  computed:{
    getModalidade(){
      switch(this.modalidade){
        case '1': return 'Home Office'
        case '2': return 'Presencial'
      }
      return ''
    },
    getTipo(){
      switch(this.tipo){
        case '1': return 'CLT'
        case '2': return 'PJ'
      }
      return ''
    },
    getPublicacao(){
      let dataPublicacao = new Date(this.publicacao)
      return dataPublicacao.toLocaleString('pt-BR')
    }
  }
};
</script>