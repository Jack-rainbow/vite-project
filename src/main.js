import { createApp } from 'vue'
import { store } from './store';
import App from './App.vue'
import router from './router';
import  './style/common.less';


// axios
import axios from './http';


// UI框架
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.use(Button);

app.use(router)
.use(store)
.mount('#app')
