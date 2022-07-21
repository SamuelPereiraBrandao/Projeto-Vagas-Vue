<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{titulo}}</div>
    <div class="card-body">
      <p>{{descricao}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: {{salario}} | Modalidade: {{modalidade}} | Tipo {{tipo}} | Publicação:
        {{publicacao}}</small
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "PagVaga",
  props: ["titulo", "descricao", "salario", "modalidade", "tipo", "publicacao"],
};
</script>