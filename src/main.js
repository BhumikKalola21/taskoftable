import { createApp } from 'vue';
import App from './App.vue';
import main from './components/Main.vue';


const app = createApp(App);
app.component('mymain',main)
app.mount('#app');
