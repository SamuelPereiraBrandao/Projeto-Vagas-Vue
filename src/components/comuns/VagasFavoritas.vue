<template>
    <div>
        <div class="divVagasFavoritas">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                Vagas Favoritas

            </button>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">
                    Vagas Favoritadas
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">{{ vaga }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VagasFavoritas",
    data: () => ({
        vagas: []
    }),
    mounted() {
        this.emitter.on('favoritarVaga', (titulo, salario, tipo) => {
            this.vagas.push(titulo, salario, tipo)
        })
        this.emitter.on('desfavoritarVaga', (titulo) => {
            let indiceArray = this.vagas.indexOf(titulo)
            if (indiceArray !== -1) this.vagas.splice(indiceArray, 1) //remover um elemento a partir de um indice do array


        })

    }
}

</script>
<style scoped>
.divVagasFavoritas {
    margin-top: 25px;
    display: flex;
    flex-direction: column;

}

button {
    border-color: #212529;
}

button:hover {
    border-color: #212529;
}
</style>