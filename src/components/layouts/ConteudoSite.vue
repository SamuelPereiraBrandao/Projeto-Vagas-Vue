<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>
<script>
import Home from "@/components/views/HomePrin.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";
export default {
  name: "ConteudoSite",
  props:{
    conteudo:{
      type:String,
      required:true
    }
  },
  components: {
    Home,
    PublicarVaga,
  },
  
};
</script>
<style module>
.teste {
  background-color: red;
}
#teste-2 {
  background-color: yellow;
}
</style>