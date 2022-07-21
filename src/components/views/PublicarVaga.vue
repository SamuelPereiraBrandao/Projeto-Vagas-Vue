<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça!</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Título da Vaga</label>
        <input type="text" class="form-control" />
        <div class="form-text">
          Por exemplo: Programador JavaScript e VueJS.
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Descrição</label>
        <textarea type="text" class="form-control"></textarea>
        <div class="form-text">Informe os detalhes</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Salário</label>
        <input type="number" class="form-control" />
        <div class="form-text">Informe o salário (R$)</div>
      </div>

      <div class="col">
        <label for="" class="form-label">Modalidade</label>
        <select class="form-select">
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas</div>
      </div>

      <div class="col">
        <label for="" class="form-label">Tipo</label>
        <select class="form-select">
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">
          Informe o tipo de contratação
        </div>
      </div>
    </div>
    
    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: "PublicarVaga",
};
</script>
<style>
</style>