<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#" @click="navegarPara('Home')">
        <h3><span>Vagas</span> </h3>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navegarPara('Home')">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="navegarPara('PublicarVaga')">Publicar Vaga</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "TopoSite",
  methods: {
    navegarPara(p) {
      this.$emit('navegar', p)
    }
  }


};
</script>
<style>
.navbar-brand {
  color: #68727c;
}

.navbar-brand :hover {
  color: #f4faff;
  transition: ease-out 0.2s;
}
</style>