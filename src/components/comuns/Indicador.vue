<template>
  <div :class="estilo">
    <p>{{titulo}}</p>
    <h2>{{indicador}}</h2>
  </div>
</template>
<script>
export default {
  name: "IndicadorDoSite",
  props:['titulo','indicador','bg','color'],
  computed:{
    estilo(){
        return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`
    }
  }
};
</script>