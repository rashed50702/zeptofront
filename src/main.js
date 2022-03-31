import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// createApp.config.globalProperties.$appName = 'My App'

let app = createApp(App);
app.config.globalProperties.image_src = 'http://127.0.0.1:8000/assets/images';

app.use(router,VueAxios, axios).mount('#app')