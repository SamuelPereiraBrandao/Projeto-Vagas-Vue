<template>
  <div class="h-100 p-5 bg-light border rounded-3">
    <h2>Pesquisar Vagas</h2>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="">Titulo da Vaga</label>
          <input class="form-control" type="text" name="" id=""
            placeholder="Pesquise por palavras chaves, por exemplo 'Vue', 'PHP', 'Junior', 'Pleno', 'Analista'" v-model="titulo"/>
          <small class="form-text text-muted">Informe palavras palavras relacionadas com o título da vaga que
            você procura </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
                <button class="btn btn-outline-dark mt-2" @click="pesquisarVaga()">Buscar </button>
        <vagas-favoritas />
        </div>
  
      </div>
    </div>
  </div>
</template>
<script>
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"
export default {

  name: "PesquisarVaga",
  data:() => ({
    titulo:''
  }),
    components: {
    VagasFavoritas
  },
  methods:{
    pesquisarVaga(){
      this.emitter.emit('filtrarVagas', {titulo: this.titulo})
    }
  }
};
</script>
