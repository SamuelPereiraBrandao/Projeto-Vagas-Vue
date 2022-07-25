<template>
<div :class="estiloAlerta">
    <slot></slot>
</div>
    
</template>
<script>
export default {
    name: 'AlertPag',
    props:{
        tipo: String
    },
    computed:{
        estiloAlerta(){
            switch(this.tipo){
                case 'erro': return 'alert alert-danger'
                case 'sucesso': return 'alert alert-success'
                default: return 'alert alert-success'
            }
        }
    }
    
}</script>
<style scoped>
.alert{
    text-align: center;
    margin: 0.5rem;
}
</style>