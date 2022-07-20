<template>
  <div class="h-100 p-5 rounded-3 border bg-dark text-white">
    <p>{{titulo}}</p>
    <h2>{{indicador}}</h2>
  </div>
</template>
<script>
export default {
  name: "IndicadorDoSite",
  props:['titulo','indicador'],
};
</script>