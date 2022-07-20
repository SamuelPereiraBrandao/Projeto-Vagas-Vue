<template>
    <div>
        <h1>Componente conteudo</h1>  

        <Home/>
        <publicar-vaga></publicar-vaga>
    </div>
</template>
<script>
import Home from '@/components/views/HomePrin.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'
export default {
    name:'ConteudoSite',
    components: {
        Home,
        PublicarVaga,
    },
    methods: {

    },
    beforeCreate(){
        console.log('Antes de criar')
    },
    created(){
        console.log('criado')
    },
    beforeMount(){
        console.log('antes de montar')
    },
    mounted(){
        console.log('montado')
    },
    beforeUpdate(){
        console.log('Antes de atualizar')
    },
    updated(){
        console.log('atualizado')
    },
    beforeUnmount(){
        console.log('Antes de desmontar/destruir')
    },
    unmounted(){
        console.log('Desmontado/destruído')
    },
    errorCaptured(){
        console.log('Erro capturado')
    },
    renderTracked(){
        console.log('Re-renderização rastreada')
    },
    renderTriggered(){
        console.log('Re-renderização adicionada')
    },
    activated(){
        console.log('componente é ativado')
    },
    deactivated(){
        console.log('componente é desativado')
    }
}
</script>
<style module>

    .teste{
        background-color:red ;
    }
    #teste-2{
        background-color:yellow ;
    }
</style>