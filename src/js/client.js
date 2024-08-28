import { createApp } from 'vue';
import MainContent from './components/MainContent.vue'

const app = createApp({});
app.component('MainContent' , MainContent);
app.mount('#app');