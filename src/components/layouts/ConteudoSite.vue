<template>
    <div>
        <h1>{{titulo}}</h1>  
        <button @click="atualizarcomponente()" >Atualizar</button>
        <button @click="conteudo = 'Home'">Home</button>
        <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
        <!-- renderizar de modo dinamico os componentes home e publicar-vaga -->
         <!--<home/>
        <publicar-vaga></publicar-vaga>-->
        
        <!-- salvo no cache-->
        <keep-alive> 
        <component :is="conteudo" />
        </keep-alive>
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
    data: () => ({
        teste: 'O componente foi criado',
        titulo:'Componente conteudo',
        conteudo:'home'
    }),
    methods: {
        atualizarcomponente(){
            this.titulo += "*"
        }
    },
    /* 
    beforeCreate(){
        console.log('Antes de criar', this.teste)
    },
    created(){
        console.log('criado')
    },
    beforeMount(){
        console.log('antes de montar o template')
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
    },/*
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
    }*/
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