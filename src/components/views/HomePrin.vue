<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga></pesquisar-vaga>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                
            </div>
            <div class="col-4">
                <div class="h-100 p-5 rounded-3 border bg-dark text-white">
                    <p>Profissionais cadastrados</p>
                    <h2>25</h2>
                </div>
            </div>
            <div class="col-4">
                <div class="h-100 p-5 rounded-3 border bg-light text-dark">
                    <p>Visitantes online</p>
                    <h2>15</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'


export default {
    name:'HomePrin',
    components:{
    PesquisarVaga,

},
    activated(){
        console.log('componente é ativado')
    },
    deactivated(){
        console.log('componente é desativado')
    },
     beforeUnmount(){
        console.log('Antes de desmontar/destruir')
    },
    unmounted(){
        console.log('Desmontado/destruído')
    },
     created(){
        console.log('criado')
    }
}
</script>
<style scoped>

</style>