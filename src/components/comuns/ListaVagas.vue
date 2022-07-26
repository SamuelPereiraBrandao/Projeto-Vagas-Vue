<template>
    <!--
    <slot name="titulo" :dadosTitulo="{ titulo: 'Título Lista', nroVagas: 15 }">
        <p>Título da lista de vagas</p>
    </slot>-->

    <slot :vagas="vagas">
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <vaga v-bind="vaga" />
            </div>
        </div>
    </slot>
    <!--
    <slot name="rodape" :dadosRodape="{ titulo: 'Rodapé lista', paginacao: { nroPaginas: 10, paginaAtual: 5 } }">
        <p>O rodapé da lista de vagas</p>
    </slot>
    -->
</template>
<script>
import Vaga from "@/components/comuns/Vaga.vue";

export default {
    name: "ListaVagas",
    data: () => ({
        vagas: [],
    }),

    components: {
        Vaga,
    },
    activated() {
        this.vagas = JSON.parse(localStorage.getItem("vagas"));
    },
    mounted() {
        this.emitter.on("filtrarVagas", (vaga) => {
            const vagas = JSON.parse(localStorage.getItem("vagas"));
            this.vagas = vagas.filter((reg) =>
                reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
            ); //true ou false: o metodo filter cria um novo array com todos os elementos que passaram no teste implementado na função
            console.log(vagas);
        });
    },
};
</script>