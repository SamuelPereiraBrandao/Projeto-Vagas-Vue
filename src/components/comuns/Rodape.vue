<template>
    <div class="rodape">
        
            <i class="bi bi-linkedin"></i>
        
        <a href="https://www.linkedin.com/in/samuelpereirabrandao/" target="_blank">LINKEDIN</a>

        <a href="https://github.com/SamuelPereiraBrandao" target="_blank">GitHub</a>
        
    </div>
</template>
<script>
export default {
    name: "RodapeDoSite"
}
</script>
<style scoped>
.rodape {
    display: flex;
    justify-content: center;

}

a {
    background: #212529;
    color: white;
    margin-right: 10px;
    
    margin-bottom: 20px;
    border: 1px solid;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px
}

a:hover {
    transition: ease-out 0.5s;
    color: #212529;
    background: white;
}
</style>