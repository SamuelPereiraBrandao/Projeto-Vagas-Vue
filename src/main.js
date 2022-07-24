import { createApp } from 'vue'
import App from './App.vue'

//importar mitt
import mitt from 'mitt'
//instância do pacote mitt
const emitter = mitt()
//iniciar instancia do vue com base no componente app
//createApp(App).mount('#app')
const app = createApp(App);

//configurar a instância do pacote mit  
app.config.globalProperties.emitter = emitter;
//associar a instancia do vue com o elemento html de id app
app.mount('#app')