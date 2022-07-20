<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Vagas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Publicar Vaga</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "TopoSite",
};
</script>
<style>
.navbar {
  border-radius: 0px 0px 10px 10px;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
</style>